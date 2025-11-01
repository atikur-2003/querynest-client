import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";

const MyQueries = () => {
  const { user } = useAuth();
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;

    const fetchQueries = async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get(`/queries?email=${user.email}`);
        const sorted = res.data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setQueries(sorted);
      } catch (err) {
        console.error("Error fetching queries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, [user?.email, axiosSecure]);


  // handle delete query function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This query will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F26B21",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        axiosSecure.delete(`/queries/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your query has been deleted.", "success");
            setQueries((prev) => prev.filter((query) => query._id !== id));
          }
        });
      }
    })
    .catch(error =>{
      console.log(error);
    })
  };

  if (loading) return <Loading></Loading>;

  return (
    <div className="min-h-screen  px-4 md:px-10 py-20 bg-base-100">
      {/* Banner */}
      <div className="rounded-xl p-6 md:p-10 text-center mb-10">
        <h2 className="text-3xl text-orange-500 md:text-4xl font-bold mb-4">My Queries</h2>
        <Link to="/add-query">
          <button className="btn border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white cursor-pointer">
            Add Queries
          </button>
        </Link>
      </div>

      {/* No Queries Found */}
      {queries.length === 0 ? (
        <div className="text-center mt-16">
          <p className="text-xl font-medium mb-4">No Queries Found.</p>
          
        </div>
      ) : (
        // Query Cards Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {queries.map((query) => (
            <div
              key={query._id}
              className="card bg-base-200 p-5 shadow-lg rounded-xl"
            >
              <h3 className="text-xl font-bold mb-2">{query.queryTitle}</h3>
              <p className="mb-4">
                {query.reason?.slice(0, 100)}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <button
                  onClick={() => navigate(`/query-details/${query._id}`)}
                  className="btn btn-sm text-blue-600 bg-blue-100 hover:bg-blue-200"
                >
                  <FaEye /> View
                </button>
                <button
                  onClick={() => navigate(`/update-query/${query._id}`)}
                  className="btn btn-sm text-yellow-600 bg-yellow-100 hover:bg-yellow-200"
                >
                  <FaEdit /> Update
                </button>
                <button
                  onClick={() => handleDelete(query._id)}
                  className="btn btn-sm text-red-600 bg-red-100 hover:bg-red-200"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyQueries;

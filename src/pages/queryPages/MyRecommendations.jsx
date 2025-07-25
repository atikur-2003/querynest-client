import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";

const MyRecommendations = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await axiosSecure.get(`/my-recommendations?email=${user?.email}`);
        setRecommendations(res.data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) fetchRecommendations();
  }, [user, axiosSecure]);

  const handleDelete = async (id, queryId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this recommendation?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F26B21",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/recommendations/${id}?queryId=${queryId}`);
        if (res.data.success) {
          setRecommendations((prev) => prev.filter((rec) => rec._id !== id));
          Swal.fire("Deleted!", "Your recommendation has been removed.", "success");
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Something went wrong", "error");
      }
    }
  };

  if (loading) return <Loading></Loading>;

  return (
    <div className="min-h-screen px-4 md:px-10 py-24 bg-base-100">
      <h2 className="text-2xl md:text-3xl text-orange-500 font-bold text-center mb-8">My Recommendations</h2>

      {recommendations.length === 0 ? (
        <p className="text-center text-xl">You haven't recommended anything yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full bg-base-200">
            <thead>
              <tr className="text-left text-base font-semibold bg-base-300">
                <th>#</th>
                <th>Product</th>
                <th>Title</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((rec, index) => (
                <tr key={rec._id} className="hover">
                  <td>{index + 1}</td>
                  <td>{rec.productName}</td>
                  <td>{rec.title}</td>
                  <td>{rec.reason}</td>
                  <td>{new Date(rec.createdAt).toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(rec._id, rec.queryId)}
                      className="btn btn-sm bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyRecommendations;
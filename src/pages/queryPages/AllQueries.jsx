import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import Loading from "../../components/Loading";

const AllQueries = () => {
  const axiosSecure = useAxiosSecure();
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get("/queries");
        const sorted = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setQueries(sorted);
      } catch (error) {
        console.error("Failed to load queries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, [axiosSecure]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen px-4 md:px-10 py-24 bg-base-100">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#F26B21]">
          All User Queries
        </h1>
        <p className="text-gray-600 mt-2">Browse all submitted boycott queries</p>
      </div>

      {queries.length === 0 ? (
        <p className="text-center text-lg font-semibold">No queries found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {queries.map((query) => (
            <div
              key={query._id}
              className="card bg-base-200 border border-gray-200 shadow-lg rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-[#F26B21] mb-1">
                  {query.queryTitle}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Product:</span>{" "}
                  {query.productName} ({query.productBrand})
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  {query.reason?.slice(0, 100)}...
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  Total Recommendation : {query.recommendationCount}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-300">
                <img
                  src={query.userPhoto}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm">{query.userName}</p>
                  <p className="text-xs text-gray-500">{query.email}</p>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => navigate(`/query-details/${query._id}`)}
                  className="btn btn-sm w-full text-orange-600 border border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer"
                >
                 Recommend
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllQueries;

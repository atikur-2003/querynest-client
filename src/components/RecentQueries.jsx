import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";

const RecentQueries = () => {
  const axiosSecure = useAxiosSecure();
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/recent-queries")
      .then((res) => setQueries(res.data))
      .catch((err) => console.error("Error fetching recent queries", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">
        Recently Added Queries
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {queries.map((query) => (
          <div
            key={query._id}
            className="flex flex-col p-5 sm:flex-row bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="">
              <img
                src={query.imageUrl}
                alt="Product"
                className="w-full sm:w-48 object-cover"
              />
            </div>

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-semibold text-orange-500 mb-1">
                  {query.title}
                </h3>
                <p className="text-gray-700">
                  <span className="font-medium">Product:</span>{" "}
                  {query.productName}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="font-medium">Posted by:</span>{" "}
                  {query.userName} ({query.userEmail})
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {new Date(query.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="mt-4">
                <Link
                  to={`/query-details/${query._id}`}
                  className="inline-block px-4 py-2 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white rounded-lg transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentQueries;

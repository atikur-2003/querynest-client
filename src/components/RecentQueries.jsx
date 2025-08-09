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
    <div className="my-14 px-4 lg:px-10 py-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-500 mb-10">
        Recently Added Queries
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {queries.map((query) => (
          <div
            key={query._id}
            className="flex flex-col p-5 sm:flex-row  rounded-lg shadow hover:shadow-md transition-all duration-300 overflow-hidden"
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
                <h3 className="text-lg font-semibold text-orange-500 mb-1">
                  Title : {query.queryTitle}
                </h3>
                <p className="text-gray-700 font-semibold">
                  Product:{" "}
                  {query.productName}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="font-medium text-base text-black">Posted by:</span>{" "}
                  {query.userName} ({query.userEmail})
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Created At: {new Date(query.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  to={`/query-details/${query._id}`}
                  className="text-sm px-3 py-2 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white rounded-lg transition"
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

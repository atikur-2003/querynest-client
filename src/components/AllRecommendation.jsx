import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router";

const AllRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/recommendations")
      .then((res) => setRecommendations(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        All Recommendations
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendations.map((rec) => (
          <div
            key={rec._id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image */}
            <img
              src={rec.productImage}
              alt={rec.productName}
              className="w-full md:w-1/3 h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <div>
                <h3 className="text-lg font-semibold">{rec.productName}</h3>

                <p className="text-gray-500 text-xs mt-2">
                  Recommended by:{" "}
                  <span className="font-medium">
                    {rec.recommenderName} ({rec.recommenderEmail})
                  </span>
                </p>
              </div>
              <div>
                <Link
                  to={`/recommendations/${rec._id}`}
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

export default AllRecommendations;

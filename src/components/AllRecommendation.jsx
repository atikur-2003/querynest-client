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
    <div className="px-4 my-20 max-w-6xl mx-auto">
      <h2 className="text-3xl text-orange-500 font-bold mb-10 text-center">
        All Recommendations
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendations.map((rec) => (
          <div
            key={rec._id}
            className="p-5 rounded-xl shadow hover:shadow-md overflow-hidden flex flex-col md:flex-row gap-5"
          >
            <img
              src={rec.productImage}
              alt={rec.productName}
              className="w-full rounded-lg md:w-1/3 h-48 object-cover"
            />

            <div className="p-4">
              <div>
                <h3 className="text-lg text-orange-500 font-semibold mb-3">Title : {rec.title}</h3>
                <h3 className="text-base font-semibold mb-3">Product : {rec.productName}</h3>
                <p className="text-xs mb-3">
                  <span className="font-medium text-base">Recommended by:</span>
                    {rec.recommenderName} ({rec.recommenderEmail})
                </p>
                <p className="text-sm mb-5">
                  Created At: {new Date(rec.createdAt).toLocaleString()}
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

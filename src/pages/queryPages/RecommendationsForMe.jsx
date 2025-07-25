import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const RecommendationsForMe = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/recommendations-for-me/${user.email}`)
        .then((res) => setRecommendations(res.data))
        .catch((err) =>
          console.error("Failed to load recommendations", err)
        );
    }
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto pt-30 pb-36">
      <h2 className="text-xl md:text-3xl font-bold text-center  text-orange-500 mb-10">
        Recommendations for My Queries
      </h2>

      {recommendations.length === 0 ? (
        <p className="text-xl text-gray-500 text-center">No recommendations found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-[#FFFBF2] text-orange-500">
              <tr>
                <th className="py-2 px-4 border">Title</th>
                <th className="py-2 px-4 border">Product Name</th>
                <th className="py-2 px-4 border">Reason</th>
                <th className="py-2 px-4 border">Recommender Name</th>
                <th className="py-2 px-4 border">Recommender Email</th>
                <th className="py-2 px-4 border">Created At</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((rec) => (
                <tr key={rec._id} className="text-sm text-gray-700">
                  <td className="py-2 px-4 border">{rec.title}</td>
                  <td className="py-2 px-4 border">{rec.productName}</td>
                  <td className="py-2 px-4 border">{rec.reason}</td>
                  <td className="py-2 px-4 border">{rec.recommenderName}</td>
                  <td className="py-2 px-4 border">{rec.recommenderEmail}</td>
                  <td className="py-2 px-4 border">
                    {new Date(rec.createdAt).toLocaleString()}
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

export default RecommendationsForMe;

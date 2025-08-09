import { useEffect, useState } from "react";
import { useParams } from "react-router"; 
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "../components/Loading";

const RecommendationDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/recommendations/${id}`)
      .then((res) => {
        setRecommendation(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id, axiosSecure]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!recommendation) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg font-semibold">Recommendation not found</p>
      </div>
    );
  }

  const { productImage, productName, reason, recommenderName, recommenderEmail, createdAt } = recommendation;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src={productImage}
            alt={productName}
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">{productName}</h2>
          <p className="text-gray-700 mb-4">{reason}</p>
          <div className="mb-4">
            <p className="text-sm text-gray-500">
              Recommended by: <span className="font-semibold">{recommenderName}</span>
            </p>
            <p className="text-sm text-gray-500">Email: {recommenderEmail}</p>
            <p className="text-sm text-gray-500">
              Date: {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationDetails;

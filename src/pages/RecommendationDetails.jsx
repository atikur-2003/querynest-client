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

  const {title, productImage, productName, reason, recommenderName, recommenderEmail, createdAt } = recommendation;

  return (
    <div className="max-w-5xl mx-auto px-4 py-28">
      <div className="text-center mb-10">
        <h1 className="text-3xl text-orange-500 font-bold">Recommendation Details</h1>
      </div>
      <div className="rounded-lg shadow hover:shadow-md overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-1/3">
          <img
            src={productImage}
            alt={productName}
            className="w-full h-64 rounded-lg lg:h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-xl text-orange-500 font-bold mb-4">Title : {title}</h2>
          <h2 className="text-lg font-bold mb-4">Product : {productName}</h2>
          <p className="text-base mb-4"><span className="font-semibold">Reason :</span> {reason}</p>
          <div className="mb-4">
            <p className="text-sm mb-3">
              Recommended by: <span className="font-semibold">{recommenderName} ({recommenderEmail})</span>
            </p>
            <p className="text-sm">
              Date: {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white rounded-lg cursor-pointer transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationDetails;

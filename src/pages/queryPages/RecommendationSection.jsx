import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const RecommendationSection = ({ query, currentUser }) => {

    const axiosSecure = useAxiosSecure()

  const [form, setForm] = useState({
    title: '',
    productName: '',
    productImage: '',
    reason: '',
  });
  const [recommendations, setRecommendations] = useState([]);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fetchRecommendations = async () => {
    const res = await axiosSecure.get(`/recommendations/${query._id}`);
    setRecommendations(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      queryId: query._id,
      queryTitle: query.title,
      productName: query.productName,
      userEmail: query.email,
      userName: query.userName,
      recommenderEmail: currentUser.email,
      recommenderName: currentUser.name,
    };

    await axiosSecure.post("/recommendations", payload);
    setForm({ title: '', productName: '', productImage: '', reason: '' });
    fetchRecommendations();

    Swal.fire('Recommendation Submitted Successfully');
  };

  useEffect(() => {
    if (query?._id) fetchRecommendations();
  }, [query]);

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Add a Recommendation</h3>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 rounded-lg shadow">
        <input
          type="text"
          name="title"
          placeholder="Recommendation Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="productName"
          placeholder="Recommended Product Name"
          value={form.productName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="productImage"
          placeholder="Recommended Product Image URL"
          value={form.productImage}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="reason"
          placeholder="Why are you recommending this product?"
          value={form.reason}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white rounded cursor-pointer"
        >
          Add Recommendation
        </button>
      </form>

      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-2">All Recommendations</h4>
        {recommendations.map((rec, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 border-t py-4"
          >
            <img
              src={rec.productImage}
              alt="rec-img"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="text-sm font-semibold">{rec.productName}</p>
              <p className="text-sm text-gray-700">{rec.title}</p>
              <p className="text-xs text-gray-600 mb-1">{rec.reason}</p>
              <p className="text-xs text-gray-500">
                Recommended by {rec.recommenderName} ({rec.recommenderEmail}) on {new Date(rec.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationSection;

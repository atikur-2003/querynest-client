import { useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddQuery = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: "",
    productBrand: "",
    imageUrl: "",
    queryTitle: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryData = {
      ...formData,
      userEmail: user.email,
      userName: user.displayName,
      userPhoto: user.photoURL,
      createdAt: new Date().toISOString(),
      recommendationCount: 0,
    };

    try {
      const res = await axiosSecure.post("/queries", queryData);
      if (res.data.insertedId) {
        Swal.fire("Success!", "Query added successfully", "success");
        navigate("/my-queries");
      }
    } catch (err) {
      console.error("Failed to add query:", err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-26">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Add a New Query</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Product Brand</label>
            <input
              type="text"
              name="productBrand"
              value={formData.productBrand}
              onChange={handleChange}
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Product Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Query Title</label>
            <input
              type="text"
              name="queryTitle"
              placeholder="e.g. Is there any better product with the same quality?"
              value={formData.queryTitle}
              onChange={handleChange}
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Query Reason Details</label>
            <textarea
              name="reason"
              rows="5"
              value={formData.reason}
              onChange={handleChange}
              className="textarea textarea-bordered w-full mt-1"
              placeholder="What is the reason of your query?"
              required
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="btn border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white cursor-pointer px-6 text-lg">
              Add Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuery;

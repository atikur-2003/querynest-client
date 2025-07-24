import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";

const UpdateQuery = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [queryData, setQueryData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch query by ID
  useEffect(() => {
    const fetchQuery = async () => {
      try {
        const res = await axiosSecure.get(`/queries/${id}`);
        setQueryData(res.data);
      } catch (error) {
        console.error("Failed to load query", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuery();
  }, [id, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedQuery = {
      productName: form.productName.value,
      productBrand: form.productBrand.value,
      imageUrl: form.productImage.value,
      queryTitle: form.queryTitle.value,
      reason: form.reason.value,
    };

    try {
      const res = await axiosSecure.put(`/queries/${id}`, updatedQuery);
      if (res.data.modifiedCount > 0) {
        Swal.fire("Query updated successfully!");
        navigate("/my-queries");
      } else {
        Swal.fire("No changes made.");
      }
    } catch (error) {
      console.error("Update failed", error);
      Swal.fire("Failed to update query.");
    }
  };

  if (loading) return <Loading></Loading>;

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Your Query</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 shadow-md rounded-xl"
      >
        <input
          type="text"
          name="productName"
          defaultValue={queryData.productName}
          className="input input-bordered w-full"
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="productBrand"
          defaultValue={queryData.productBrand}
          className="input input-bordered w-full"
          placeholder="Product Brand"
          required
        />
        <input
          type="text"
          name="productImage"
          defaultValue={queryData.productImage}
          className="input input-bordered w-full"
          placeholder="Product Image URL"
          required
        />
        <input
          type="text"
          name="queryTitle"
          defaultValue={queryData.queryTitle}
          className="input input-bordered w-full"
          placeholder="Query Title"
          required
        />
        <textarea
          name="reason"
          defaultValue={queryData.reason}
          className="textarea textarea-bordered w-full"
          placeholder="Boycotting Reason Details"
          rows={4}
          required
        />
        <button
          type="submit"
          className="btn border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white w-full"
        >
          Update Query
        </button>
      </form>
    </div>
  );
};

export default UpdateQuery;

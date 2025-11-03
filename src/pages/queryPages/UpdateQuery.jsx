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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Query Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
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
      <h2 className="text-2xl text-orange-500 font-bold mb-6 text-center">
        Update Your Query
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-base-200 p-6 shadow-md rounded-xl space-y-6"
      >
        <div>
          <label className="block font-medium">Product Name</label>
          <input
            type="text"
            name="productName"
            defaultValue={queryData.productName}
            className="input input-bordered w-full focus:outline-none focus:border-orange-500"
            placeholder="Product Name"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Product Brand</label>
          <input
            type="text"
            name="productBrand"
            defaultValue={queryData.productBrand}
            className="input input-bordered w-full focus:outline-none focus:border-orange-500"
            placeholder="Product Brand"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Product Image</label>
          <input
            type="text"
            name="productImage"
            defaultValue={queryData.imageUrl}
            className="input input-bordered w-full focus:outline-none focus:border-orange-500"
            placeholder="Product Image URL"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Query Title</label>
          <input
            type="text"
            name="queryTitle"
            defaultValue={queryData.queryTitle}
            className="input input-bordered w-full focus:outline-none focus:border-orange-500"
            placeholder="Query Title"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Query Reason</label>
          <textarea
            name="reason"
            defaultValue={queryData.reason}
            className="textarea textarea-bordered w-full focus:outline-none focus:border-orange-500"
            placeholder="Boycotting Reason Details"
            rows={4}
            required
          />
        </div>
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

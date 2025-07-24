import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import { FaArrowLeft } from "react-icons/fa";
import QueryDetailsCard from "./QueryDetailsCard";
import RecommendationSection from "./RecommendationSection";
import useAuth from "../../hooks/useAuth";

const QueryDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [query, setQuery] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuery = async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get(`/queries/${id}`);
        setQuery(res.data);
      } catch (err) {
        console.error("Failed to fetch query details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuery();
  }, [id, axiosSecure]);

  if (loading) return <Loading />;

  if (!query)
    return (
      <div className="text-center mt-16 text-red-500 font-semibold">
        Query not found!
      </div>
    );

  return (
    <div className="min-h-screen bg-base-100 px-4 md:px-10 py-30">
      <div className="flex">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 btn btn-sm bg-gray-100 hover:bg-gray-200 text-gray-800"
        >
          <FaArrowLeft /> Back
        </button>
      </div>
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl text-orange-500 font-bold">
          Query Details Here
        </h1>
      </div>

      <QueryDetailsCard query={query}></QueryDetailsCard>
      <RecommendationSection
        query={query}
        setQuery={setQuery}
        currentUser={{
          name: user.displayName,
          email: user.email,
        }}
      ></RecommendationSection>
    </div>
  );
};

export default QueryDetails;

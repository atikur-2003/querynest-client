import React from "react";

const QueryDetailsCard = ({ query }) => {
  const {
    imageUrl,
    productName,
    productBrand,
    queryTitle,
    reason,
    userName,
    userEmail,
    createdAt,
    recommendationCount,
  } = query;

  return (
    <div className="max-w-5xl bg-base-300 mx-auto shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row p-7 gap-6">
      {/* Image */}
      <div className="w-full md:w-1/3">
        <img
          src={imageUrl}
          alt={productName}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="w-full md:w-2/3 space-y-2">
        <h2 className="font-semibold">
          <strong>Product Name :</strong> {productName}
        </h2>
        <p className="text-base font-semibold ">
          Brand: <span className="font-medium">{productBrand}</span>
        </p>
        <p className="text-lg font-medium"><span className="font-semibold">Title : </span>{queryTitle}</p>
        <p>
          <span className="font-semibold">Reason:</span> {reason}
        </p>

        <div className="mt-4 text-base space-y-1">
          <p>
            <span className="font-semibold">User:</span> {userName} ({userEmail})
          </p>
          <p>
            <span className="font-semibold">Created At:</span>{" "}
            {new Date(createdAt).toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Total Recommendations:</span>{" "}
            {recommendationCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QueryDetailsCard;

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
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row p-4 gap-6">
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
        <h2 className="font-semibold text-gray-800">
          <strong>Product Name :</strong> {productName}
        </h2>
        <p className="text-sm text-gray-500">
          Brand: <span className="font-medium">{productBrand}</span>
        </p>
        <p className="text-lg font-medium text-gray-700">{queryTitle}</p>
        <p className="text-gray-600">
          <span className="font-medium">Reason:</span> {reason}
        </p>

        <div className="mt-4 text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-medium">User:</span> {userName} ({userEmail})
          </p>
          <p>
            <span className="font-medium">Created At:</span>{" "}
            {new Date(createdAt).toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Recommendations:</span>{" "}
            {recommendationCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QueryDetailsCard;

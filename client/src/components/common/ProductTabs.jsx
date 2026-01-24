import React from "react";

const ProductTabs = ({ 
  activeTab, 
  setActiveTab, 
  warrantyInformation, 
  shippingInformation, 
  returnPolicy, 
  weight, 
  dimensions, 
  availabilityStatus, 
  reviews, 
  tags 
}) => {
  return (
    <div className="mt-10 bg-white rounded-2xl shadow-md p-6">
      {/* Tabs Header */}
      <div className="flex gap-6 border-b border-gray-200 pb-2 mb-4 overflow-x-auto">
        {["specs", "reviews", "tags"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize text-lg font-medium pb-2 border-b-2 ${
              activeTab === tab
                ? "text-green-600 border-green-600"
                : "text-gray-500 border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      {activeTab === "specs" && (
        <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
          <p>
            <strong>Warranty:</strong> {warrantyInformation}
          </p>
          <p>
            <strong>Shipping:</strong> {shippingInformation}
          </p>
          <p>
            <strong>Return Policy:</strong> {returnPolicy}
          </p>
          <p>
            <strong>Weight:</strong> {weight} g
          </p>
          <p>
            <strong>Dimensions:</strong>{" "}
            {dimensions?.width} × {dimensions?.height} × {dimensions?.depth}
          </p>
          <p>
            <strong>Availability:</strong> {availabilityStatus}
          </p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="space-y-4">
          {reviews?.length > 0 ? (
            reviews.map((r, i) => (
              <div key={i} className="border-b border-gray-100 pb-3">
                <p className="text-yellow-400">
                  {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                </p>
                <p className="text-gray-700 mt-1">{r.comment}</p>
                <p className="text-xs text-gray-500 mt-1">
                  — {r.reviewerName} ({new Date(r.date).toLocaleDateString()})
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      )}

      {activeTab === "tags" && (
        <div className="flex flex-wrap gap-2">
          {tags?.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full"
            >
              #{t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductTabs;

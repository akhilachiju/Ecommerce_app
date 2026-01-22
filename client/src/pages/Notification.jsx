import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Section, Container } from "../components";
import { HiArrowLeft, HiBell } from "react-icons/hi";

const Notification = () => {
  const navigate = useNavigate();

  // Empty notifications array to show empty state
  const notifications = [];

  return (
    <Section background="white" className="min-h-screen">
      <Container className="py-10">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-green-600 transition mb-6"
        >
          <HiArrowLeft className="w-5 h-5 mr-2" />
          Continue Shopping
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Your Notifications
        </h1>

        {notifications.length === 0 ? (
          <div className="text-center py-20">
            <HiBell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-lg text-gray-500 mb-4">You have no notifications at the moment.</p>
            <Link
              to="/shop"
              className="bg-black text-white font-medium px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Notifications will be rendered here when available */}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Notification;

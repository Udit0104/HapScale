import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext"; // Import AppContext
import { toast } from "react-toastify"; // For popup notifications

const Header = () => {
  const navigate = useNavigate();
  const { token } = useContext(AppContext); // Get the token from context
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    if (token) {
      setShowPopup(true); // Show popup if the user is logged in
    } else {
      navigate("/login");
      scrollTo(0, 0);
    }
  };

  return (
    <div className="pt-16">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.1)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[calc(100vh-6rem)] py-8">
          {/* Left Section - Text Content */}
          <div className="md:w-1/2 flex flex-col items-start justify-center space-y-8 md:pr-12">
            <div className="bg-white/10 backdrop-blur-md rounded-full py-2 px-4 border border-white/20">
              <span className="text-emerald-400 font-medium">
                ✨ Stay Happy, Stay Positive
              </span>
            </div>

            <div className="space-y-4">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
    BE HAPPY <br />
    <span className="bg-gradient-to-r from-blue-200 to-emerald-200 bg-clip-text text-transparent">
      LIVE HAPPY
    </span>
  </h1>
  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
    Scale and Enhance Enterprise Happiness with HapScale !
  </p>
</div>


            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={handleGetStartedClick}
                className="relative overflow-hidden rounded-full bg-white px-8 py-3 text-sm sm:text-base font-bold text-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                Get Started
              </button>

              <a
                href="#why-hapscale"
                className="relative overflow-hidden rounded-full bg-white px-8 py-3 text-sm sm:text-base font-bold text-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                
              >
                Know More
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur-2xl" />
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/90 to-indigo-900/90 p-1">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={assets.header_img}
                    alt="Happiness Illustration"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
            <h2 className="text-lg font-semibold text-gray-800">
              You're already logged in!
            </h2>
            <p className="text-gray-600 mt-2">
              You are already logged in. Do you want to continue?
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate("/my-profile"); // Change this to your main page
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Go to My Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

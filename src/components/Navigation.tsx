import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl">
            Ivy Plus Consulting
          </Link>
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-blue-600 ${
                location.pathname === "/" ? "text-blue-600" : ""
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="px-4 py-2 hover:text-blue-600"
                onMouseEnter={() => setServicesOpen(true)}
              >
                Services ▼
              </button>
              {servicesOpen && (
                <div
                  className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md z-10"
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  <Link
                    to="/college-counseling"
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    College Counseling
                  </Link>
                  <Link
                    to="/prep-school-counseling"
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Prep School Counseling
                  </Link>
                  <Link
                    to="/medical-school-counseling"
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Medical School Counseling
                  </Link>
                  <Link
                    to="/test-prep"
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Test Prep
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about-us"
              className={`hover:text-blue-600 ${
                location.pathname === "/about-us" ? "text-blue-600" : ""
              }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React, { useState } from "react";
import { PageName } from "../types";

interface NavigationProps {
  currentPage: PageName;
  setCurrentPage: (page: PageName) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  const handleServiceClick = (page: PageName): void => {
    setCurrentPage(page);
    setServicesOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl">Ivy Plus Consulting</div>
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage("home")}
              className="hover:text-blue-600"
            >
              Home
            </button>

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
                  <button
                    onClick={() => handleServiceClick("college-counseling")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    College Counseling
                  </button>
                  <button
                    onClick={() => handleServiceClick("prep-school-counseling")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Prep School Counseling
                  </button>
                  <button
                    onClick={() =>
                      handleServiceClick("medical-school-counseling")
                    }
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Medical School Counseling
                  </button>
                  <button
                    onClick={() => handleServiceClick("test-prep")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Test Prep
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setCurrentPage("about-us")}
              className="hover:text-blue-600"
            >
              About Us
            </button>

            <button
              onClick={() => setCurrentPage("book-consultation")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React from "react";
import StyledImage from "../components/StyledImage";
import usePageTitle from "../hooks/usePageTitle";

const Home: React.FC = () => {
  usePageTitle(""); // Empty string for home page - will show "Ivy+ Consulting"
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-900 to-red-800 text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Path to Elite Universities
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            We provide the best solution for College Counseling and
            SAT/SHSAT/Hunter prep
          </p>
          <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-red-900 transition-colors duration-200">
            LEARN MORE →
          </button>
        </div>
      </section>

      {/* Expert College Counseling Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <StyledImage
            src="/images/home/graduation-caps.jpg"
            alt="College students throwing graduation caps in celebration"
            className="h-96 rounded-lg"
          />

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Expert College Counseling Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Welcome to Ivy+ Consulting, your trusted resource for personalized
              college counseling services. Our team of experts provides
              comprehensive guidance to help students navigate the college
              admissions process with confidence.
            </p>
            <button className="font-semibold text-lg hover:text-blue-600 transition-colors duration-200">
              FIND OUT MORE →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

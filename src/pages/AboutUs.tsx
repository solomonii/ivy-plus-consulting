import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 px-8 text-center border-b border-gray-200">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Meet Grace</h1>
        <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">
                Image Placeholder - Replace with Grace's photo
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Founder & CEO</h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              With over 10 years of experience in admissions strategy and
              consulting, Grace Park has empowered numerous students from all
              walks of life to gain acceptance into top-tier schools, equipping
              them for the challenges and excitement of higher education. As a
              seasoned professional, Grace specializes in helping both US and
              international students navigate the complex admissions process.
              Her profound knowledge extends across various fields, including
              dual degree dental programs, medical schools, private high
              schools, and Ivy League colleges. Grace's personalized guidance
              has been instrumental in shaping successful academic journeys for
              aspiring professionals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

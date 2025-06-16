import React from "react";
import { Link } from "react-router-dom";
import StyledImage from "./StyledImage";

interface ServiceSection {
  title: string;
  content: string;
}

interface ServicePageLayoutProps {
  pageTitle: string;
  imagePlaceholderText?: string;
  imageSrc?: string;
  imageAlt?: string;
  sections: ServiceSection[];
  ctaText?: string;
  ctaLink?: string;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  pageTitle,
  imagePlaceholderText,
  imageSrc,
  imageAlt,
  sections,
  ctaText = "BOOK A FREE CONSULTATION →",
  ctaLink = "/contact",
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 px-8 text-center border-b border-gray-200">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">{pageTitle}</h1>
        <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="md:sticky md:top-8">
            {imageSrc && imageAlt ? (
              <StyledImage
                src={imageSrc}
                alt={imageAlt}
                className="h-96 rounded-lg"
              />
            ) : (
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">
                  {imagePlaceholderText}
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Services */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-8">
              <Link
                to={ctaLink}
                className="inline-block bg-white text-black border-2 border-black px-6 py-3 font-semibold hover:bg-black hover:text-white transition-colors duration-200"
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;

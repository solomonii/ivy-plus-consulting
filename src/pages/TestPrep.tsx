import React from "react";
import ServicePageLayout from "../components/ServicePageLayout";

const TestPrep: React.FC = () => {
  const sections = [
    {
      title: "SAT, ACT, AP",
      content:
        "We specialize in elevating your standardized test scores to the 99 percentile(SAT 1530+), ensuring you're equipped for admission to Ivy League schools.",
    },
    {
      title: "Academic Tutoring",
      content:
        "Getting a top GPA is crucial in college applications. That's why we offer advanced math, science, and ELA studies.",
    },
    {
      title: "SHSAT, SSAT, ISEE, Hunter College High School",
      content:
        "We provide high school admission test prep for Specialized High Schools in New York, Private Schools, and Hunter College High School.",
    },
    {
      title: "Get The Best Score with Ivy+ Consulting",
      content:
        "Achieve your highest scores with our comprehensive test prep and tutoring services. Our experienced team guarantees results, providing personalized support tailored to maximize your potential. With top-tier teachers and proven methods, we ensure you excel in standardized tests, empowering you to reach your academic goals confidently.",
    },
    {
      title: "Why Choose Ivy+ Consulting?",
      content:
        "Our team of experienced tutors has a proven track record of helping students achieve their goals. We provide personalized guidance and support throughout the entire process.",
    },
  ];

  return (
    <ServicePageLayout
      pageTitle="Test Prep and Tutoring"
      imagePlaceholderText="Image Placeholder - Replace with tutoring/test prep image"
      sections={sections}
      ctaText="SCHEDULE A FREE CONSULTATION →"
    />
  );
};

export default TestPrep;

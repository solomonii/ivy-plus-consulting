import React from "react";
import ServicePageLayout from "../components/ServicePageLayout";
import usePageTitle from "../hooks/usePageTitle";

const PrepSchoolCounseling: React.FC = () => {
  usePageTitle("Prep School Counseling");
  const sections = [
    {
      title: "Comprehensive Application Strategy Development",
      content:
        "Our consultants craft a personalized application strategy, emphasizing your child's unique strengths and experiences. We guide families through every step of the process, ensuring all components, from recommendation letters to personal statements, are compelling and cohesive.",
    },
    {
      title: "ISEE/SSAT Excellence",
      content:
        "Achieving high scores on the ISEE/SSAT is crucial for elite school admissions. We offer targeted test preparation, including practice tests, individualized tutoring, and proven test-taking strategies to maximize your child's performance.",
    },
    {
      title: "Standout Extracurricular Planning",
      content:
        "Top schools seek well-rounded students with exceptional extracurricular profiles. Our experts help identify and develop activities that align with your child's interests and strengths, creating an exceptional application that highlights their unique talents and leadership potential.",
    },
    {
      title: "Ongoing Academic and Social Support",
      content:
        "Acceptance is just the beginning. We provide ongoing support to ensure your child thrives academically and socially in their new environment. Our services include time management coaching, academic tutoring, and social adjustment guidance to foster long-term success.",
    },
  ];

  return (
    <ServicePageLayout
      pageTitle="Private School Counseling Services"
      imageSrc="/images/services/prep-school.jpg"
      imageAlt="Students walking on a prestigious prep school campus with classical architecture"
      sections={sections}
    />
  );
};

export default PrepSchoolCounseling;

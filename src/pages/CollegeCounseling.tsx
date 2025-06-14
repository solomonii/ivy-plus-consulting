import React from "react";
import ServicePageLayout from "../components/ServicePageLayout";
import usePageTitle from "../hooks/usePageTitle";

const CollegeCounseling: React.FC = () => {
  usePageTitle("College Counseling");
  const sections = [
    {
      title: "Personalized College Planning",
      content:
        "Our expert counselors will work one-on-one with your child to develop a personalized college plan, including a tailored list of colleges, application timelines, and strategic advice. We analyze applicants' GPAs, standardized test scores, awards, and extracurricular activities to propose the best possible outcomes.",
    },
    {
      title: "Find Your Spike: The Secret Sauce",
      content:
        "In Ivy League and top college applications, having a spike is crucial. To help you stand out, we use our secret sauce to identify and highlight the best spike from your application.",
    },
    {
      title: "College Essay Assistance",
      content:
        "Our team of experienced writers and editors will guide your child through the college essay writing process, providing feedback and suggestions to ensure their essay stands out.",
    },
    {
      title: "Financial Aid Assistance",
      content:
        "Our team will help guide you through the financial aid process and identify scholarships and grants your child may be eligible for.",
    },
    {
      title: "College Visits and Interviews",
      content:
        "We offer guidance and support for college visits and interviews, helping your child make the most of their college visits and prepare for successful interviews.",
    },
    {
      title: "Post-Acceptance Support",
      content:
        "Our counselors provide support and guidance for your child after they have been accepted to college, helping them navigate the transition to college life.",
    },
  ];

  return (
    <ServicePageLayout
      pageTitle="Expert College Counseling Services"
      imageSrc="/images/services/college-counseling.jpg"
      imageAlt="Aerial view of a winding path through a forest, symbolizing the journey to college"
      sections={sections}
    />
  );
};

export default CollegeCounseling;

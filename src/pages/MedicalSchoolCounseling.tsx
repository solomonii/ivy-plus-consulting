import React from "react";
import ServicePageLayout from "../components/ServicePageLayout";

const MedicalSchoolCounseling: React.FC = () => {
  const sections = [
    {
      title: "Holistic Approach to Application Strategy",
      content:
        "We take a holistic approach to application strategy, considering not just academic achievements but also extracurricular activities, volunteer experiences, and personal attributes that medical schools value. Our comprehensive guidance ensures that your application presents a well-rounded picture of who you are as a candidate.",
    },
    {
      title: "Specialized BS/MD Program Expertise",
      content:
        "Our consultants have specific expertise in advising students interested in BS/MD programs, understanding the unique requirements and competitive nature of these accelerated medical pathways. We provide tailored advice to maximize your chances of gaining acceptance into these highly selective programs.",
    },
    {
      title: "Strategic MCAT Score Improvement",
      content:
        "For applicants seeking to improve their MCAT scores, we specialize in strategic score enhancement. Our consultants analyze previous test performance, identify areas for improvement, and implement targeted study techniques to boost scores effectively. Whether you're aiming for a competitive score or looking to enhance your application profile, our proven methods can significantly enhance your MCAT performance and overall candidacy.",
    },
    {
      title: "Interview Preparation Excellence",
      content:
        "We offer rigorous interview preparation sessions tailored to medical school interviews, including MMI (Multiple Mini Interview) simulations where applicable. Our goal is to equip you with the confidence and skills needed to excel in any interview format, ensuring you leave a lasting impression on admissions committees.",
    },
    {
      title: "Tailored Medical School Selection Assistance",
      content:
        "We provide personalized guidance to help you choose the right medical schools tailored to your academic achievements, career goals, and personal preferences. Our consultants consider factors unique to medical education such as research opportunities, clinical rotations, specialized programs (like MD/PhD or global health), and community outreach initiatives. This ensures you apply confidently to institutions that align with your aspirations and offer the resources necessary for your professional development in medicine.",
    },
  ];

  return (
    <ServicePageLayout
      pageTitle="Medical School Counseling Services"
      imagePlaceholderText="Image Placeholder - Replace with medical students/doctors image"
      sections={sections}
    />
  );
};

export default MedicalSchoolCounseling;

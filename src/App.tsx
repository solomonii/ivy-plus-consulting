import React, { useState } from "react";
import Navigation from "./components/Navigation";
import AboutUs from "./pages/AboutUs";
import BookConsultation from "./pages/BookConsultation";
import CollegeCounseling from "./pages/CollegeCounseling";
import Home from "./pages/Home";
import MedicalSchoolCounseling from "./pages/MedicalSchoolCounseling";
import PrepSchoolCounseling from "./pages/PrepSchoolCounseling";
import TestPrep from "./pages/TestPrep";
import { PageName } from "./types";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageName>("home");

  const pages: Record<PageName, React.ReactElement> = {
    home: <Home />,
    "college-counseling": <CollegeCounseling />,
    "prep-school-counseling": <PrepSchoolCounseling />,
    "medical-school-counseling": <MedicalSchoolCounseling />,
    "test-prep": <TestPrep />,
    "about-us": <AboutUs />,
    "book-consultation": <BookConsultation />,
  };

  // TODO: Decide whether we want to use Tailwind or not
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{pages[currentPage]}</main>
    </div>
  );
};

export default App;

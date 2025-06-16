import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutUs from "./pages/AboutUs";
import BookConsultation from "./pages/BookConsultation";
import CollegeCounseling from "./pages/CollegeCounseling";
import Home from "./pages/Home";
import MedicalSchoolCounseling from "./pages/MedicalSchoolCounseling";
import PrepSchoolCounseling from "./pages/PrepSchoolCounseling";
import TestPrep from "./pages/TestPrep";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/college-counseling" element={<CollegeCounseling />} />
            <Route
              path="/prep-school-counseling"
              element={<PrepSchoolCounseling />}
            />
            <Route
              path="/medical-school-counseling"
              element={<MedicalSchoolCounseling />}
            />
            <Route path="/test-prep" element={<TestPrep />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<BookConsultation />} />
            {/* Redirect /book-consultation to /contact for consistency */}
            <Route
              path="/book-consultation"
              element={<Navigate to="/contact" />}
            />
            {/* 404 - redirect to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

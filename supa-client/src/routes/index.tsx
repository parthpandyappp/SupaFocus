import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { LandingPage, PrivacyPolicy, TermsOfService } from "../pages";

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/focus/:user" element={<Home />} />
      <Route path="/focus/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export { Endpoints as Routes };

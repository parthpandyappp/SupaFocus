import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { PrivacyPolicy, TermsOfService } from "../pages";

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/:user" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export { Endpoints as Routes };

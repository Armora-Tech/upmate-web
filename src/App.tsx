import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/pages/home";
import { PrivacyPolicy } from "./components/pages/privacyPolicy";
import { TermsConditions } from "./components/pages/termsConditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

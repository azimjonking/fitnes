import React from "react";
import Contact from "../../component/contact/Contact";
import Download from "../../component/download/Download";
import PrivacyInfo from "../../component/privacyInfo/PrivacyInfo";
import "./privacy.css";

const Privacy = () => {
  return (
    <div className="privacy">
      <PrivacyInfo />
      <Download />
      <Contact />
    </div>
  );
};

export default Privacy;

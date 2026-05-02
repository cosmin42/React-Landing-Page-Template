import React from 'react';
import { Footer } from '../components/footer';
import { Privacy } from '../components/privacy';

// Page wrapper for dedicated /privacy-policy route
const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-page">
      <Privacy />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;

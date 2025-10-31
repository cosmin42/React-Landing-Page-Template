import React from 'react';
import { Navigation } from '../components/navigation';
import { Privacy } from '../components/privacy';

// Page wrapper for dedicated /privacy-policy route
const PrivacyPolicyPage = () => {
  return (
    <div>
      <Navigation />
      <div style={{ marginTop: '70px' }}>
        <Privacy />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

import React from 'react';
import { Credits } from '../components/credits';
import { Footer } from '../components/footer';
import '../components/credits.css';

// Page wrapper for dedicated /credits route
const CreditsPage = () => {
  return (
    <div className="credits-page">
      <Credits />
      <Footer />
    </div>
  );
};

export default CreditsPage;

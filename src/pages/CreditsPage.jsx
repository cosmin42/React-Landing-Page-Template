import React from 'react';
import { Navigation } from '../components/navigation';
import { Credits } from '../components/credits';
import '../components/credits.css';

// Page wrapper for dedicated /credits route
const CreditsPage = () => {
  return (
    <div>
      <Navigation />
      <div className="credits-page">
        <Credits />
      </div>
    </div>
  );
};

export default CreditsPage;

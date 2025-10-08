import React from 'react';
import { Navigation } from '../components/navigation';
import { Credits } from '../components/credits';

// Page wrapper for dedicated /credits route
const CreditsPage = () => {
  return (
    <div>
      <Navigation />
      <div style={{ marginTop: '70px' }}>
        <Credits />
      </div>
    </div>
  );
};

export default CreditsPage;

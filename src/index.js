import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import CreditsPage from './pages/CreditsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookieBanner from './components/cookieBanner';
import LanguageSwitcher from './components/languageSwitcher';
import { LanguageProvider } from './i18n/LanguageContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/credits" element={<CreditsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <CookieBanner />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

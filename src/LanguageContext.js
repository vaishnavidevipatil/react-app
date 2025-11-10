import React, { createContext, useState } from 'react';

// Create the Context
export const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // default language is English

  const toggleLanguage = () => {
    // en=english, es=spanish and fr=french
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : prevLang === 'es' ? 'fr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

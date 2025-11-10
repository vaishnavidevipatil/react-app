import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Greethings = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className='hello'>
      {language === 'en' && <h1>Hello Context!</h1>}

    {language === 'es' && <h2>Spanish</h2>}
    {language === 'es' && <h1>¡Hola!</h1>}


    <div>
        {language === 'fr' && <h2>French</h2>}
        {language === 'fr' && <h1>Bonjour!</h1>}
    </div>    

      <button onClick={toggleLanguage}>Switch Language</button>
    </div>
  );
};

export default Greethings;

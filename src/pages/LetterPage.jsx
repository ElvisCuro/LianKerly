import React, { useState } from 'react';
import './LetterPage.css';

const LetterPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLetterClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="letter-page">
      <div className={`letter ${isOpen ? 'open' : 'closed'}`} onClick={handleLetterClick}>
        <div className={`letter-content ${isOpen ? 'fade-in' : 'fade-out '}`}>
          <p className="letter-text">TE QUIERO MUCHO</p>
        </div>
        {!isOpen && <div className="letter-button"></div>}
      </div>
    </div>
  );
};

export default LetterPage;
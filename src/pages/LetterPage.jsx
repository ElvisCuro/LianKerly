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
        <div className={`letter-content ${isOpen ? 'fade-in' : 'fade-out'}`}>
          <p className="letter-text ">
            Nunca imaginé que llegaría a conocer a alguien como tú, y mucho menos que terminaría apreciándote tanto. Pero la vida nos sorprende de formas inesperadas, y hoy me alegra que nuestros caminos se hayan cruzado.

            Contigo encontré una confianza que no había sentido antes. Pude hablarte de cosas que nunca había compartido con nadie, y, de algún modo, tu compañía hizo que un momento difícil fuera más llevadero.

            Cuando supe por lo que pasaste de pequeña, me conmovió profundamente. No es fácil cargar con ciertas experiencias, y entiendo que algunas cosas dejan marcas. Aun así, puedo ver la gran persona que eres, y me apena que a veces no puedas sentirte completamente libre de ser tú misma.

            Solo quiero que sepas que valoro mucho la persona que eres. No puedo cambiar lo que pasó, pero sí desearte lo mejor en cada paso que des.

            <p className='autor'>
            Con aprecio,
            </p>
            <span className='autor'>
            Elvis C. R.
            </span>
          </p>
        </div>
        {!isOpen && <div className="letter-button"></div>}
      </div>
    </div>
  );
};

export default LetterPage;
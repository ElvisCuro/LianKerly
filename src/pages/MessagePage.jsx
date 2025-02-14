import React, { useState, useEffect } from 'react';
import mensajes from './mensajes';
import './MessagePage.css';

const MessagePage = () => {
  const [mensaje, setMensaje] = useState({});

  const actualizarMensaje = () => {
    const randomIndex = Math.floor(Math.random() * mensajes.length);
    const nuevoMensaje = mensajes[randomIndex];
    setMensaje(nuevoMensaje);
    localStorage.setItem('mensaje', JSON.stringify(nuevoMensaje));
    localStorage.setItem('ultimaActualizacion', Date.now());
  };

  useEffect(() => {
    const mensajeGuardado = JSON.parse(localStorage.getItem('mensaje'));
    const ultimaActualizacion = localStorage.getItem('ultimaActualizacion');
    const ahora = Date.now();

    if (mensajeGuardado && ultimaActualizacion && (ahora - ultimaActualizacion < 20 * 60 * 60 * 1000)) {
      setMensaje(mensajeGuardado);
    } else {
      actualizarMensaje();
    }
  }, []);

  return (
    <div className="message-page">
      <div className="message-container">
        <p className="message-text">{mensaje.mensaje}</p>
        <p className="message-author"><em>- {mensaje.autor}</em></p>
      </div>
    </div>
  );
};

export default MessagePage;
import React, { useState, useEffect } from 'react';
import mensajes from './mensajes';
import './MessagePage.css';

const MessagePage = () => {
  const [mensaje, setMensaje] = useState({});
  const [contador, setContador] = useState(1);

  // Función para actualizar el mensaje del día
  const actualizarMensaje = () => {
    const randomIndex = Math.floor(Math.random() * mensajes.length);
    const nuevoMensaje = mensajes[randomIndex];
    setMensaje(nuevoMensaje);
    localStorage.setItem('mensaje', JSON.stringify(nuevoMensaje));
    localStorage.setItem('ultimaActualizacionMensaje', Date.now());
  };

  // Función para actualizar el contador del día
  const actualizarContador = () => {
    setContador((prevContador) => {
      const nuevoContador = prevContador < 30 ? prevContador - 1 : 1;
      localStorage.setItem('contador', JSON.stringify(nuevoContador));
      localStorage.setItem('ultimaActualizacionContador', Date.now());
      return nuevoContador;
    });
  };

  useEffect(() => {
    const mensajeGuardado = JSON.parse(localStorage.getItem('mensaje'));
    const ultimaActualizacionMensaje = parseInt(localStorage.getItem('ultimaActualizacionMensaje'), 10) || 0;
    const ahora = Date.now();
    const UN_DIA = 20*60*601000;

    if (mensajeGuardado && ahora - ultimaActualizacionMensaje < UN_DIA) {
      setMensaje(mensajeGuardado);
    } else {
      actualizarMensaje();
    }
  }, []);

  useEffect(() => {
    const contadorGuardado = JSON.parse(localStorage.getItem('contador')) || 1;
    const ultimaActualizacionContador = parseInt(localStorage.getItem('ultimaActualizacionContador'), 10) || 0;
    const ahora = Date.now();
    const UN_DIA = 20*60*601000;

    setContador(contadorGuardado);

    if (ahora - ultimaActualizacionContador >= UN_DIA) {
      actualizarContador();
    }
  }, []);

  return (
    <div className="message-page">
      <div className="message-container">
        <p className="message-text">{mensaje.mensaje}</p>
        <p className="message-author"><em>- {mensaje.autor}</em></p>
        <div className="contador">Frase del día: {contador}</div>
      </div>
    </div>
  );
};

export default MessagePage;

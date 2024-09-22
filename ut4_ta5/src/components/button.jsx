// button.jsx
import React, { useState } from 'react';

const Button = () => {
  const [showText, setShowText] = useState(false);  // Estado para controlar la visibilidad del texto

  const toggleText = () => {
    setShowText((prevState) => !prevState);  // Cambia el estado entre verdadero o falso
  };

  return (
    <div>
      <button onClick={toggleText}>
        {showText ? 'Ocultar texto' : 'Mostrar texto'}
      </button>

      {showText && <p> texto que aparece y desaparece</p>}  {/* Condicionalmente muestra el texto */}
    </div>
  );
};

export default Button;


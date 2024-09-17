// App.js
import React, { useState } from 'react';
import Input from './components/Input';

const App = () => {
  const [inputValue, setInputValue] = useState('');  // Estado para guardar el valor del input

  return (
    <div>
      <h1>Ingresa información:</h1>
      <Input value={inputValue} onChange={setInputValue} />  {/* Componente Input */}
      
      <p>Lo que escribes: {inputValue}</p>  {/* Muestra el valor del input en tiempo real */}
    </div>
  );
};

export default App;

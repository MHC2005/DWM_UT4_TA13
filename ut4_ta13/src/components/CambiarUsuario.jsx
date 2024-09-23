import React, { useContext } from "react";
import { UserContext } from "./UserContext"; 

const CambiarUsuario = () => {
  const { setUsername } = useContext(UserContext); 
  const handleChange = (e) => {
    setUsername(e.target.value); 
  };

  return (
    <div>
      <h3>Cambiar el nombre del usuario:</h3>
      <input
        type="text"
        placeholder="Escribe un nuevo nombre"
        onChange={handleChange} 
      />
    </div>
  );
};

export default CambiarUsuario;

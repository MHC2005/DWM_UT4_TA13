import React, { useContext } from "react";
import { UserContext } from "./UserContext"; // Importar el contexto

const MostrarUsuario = () => {
  const { username } = useContext(UserContext); // Obtener el nombre del usuario desde el contexto

  return (
    <div>
      <h2>Nombre del usuario desde el contexto:</h2>
      <p>{username}</p>
    </div>
  );
};

export default MostrarUsuario;

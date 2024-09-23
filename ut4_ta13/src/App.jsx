import React from "react";
import { UserProvider } from "./components/UserContext"; 
import MostrarUsuario from "./components/MostrarUsuario"; 
import CambiarUsuario from "./components/CambiarUsuario"; 

function App() {
  return (
    <UserProvider>
      <div>
        <h1>Aplicación con Contexto</h1>
        <MostrarUsuario />
        <CambiarUsuario />
      </div>
    </UserProvider>
  );
}

export default App;

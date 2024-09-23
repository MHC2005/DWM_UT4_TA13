import React from "react";
import { UserProvider } from "./components/UserContext"; 
import MostrarUsuario from "./components/MostrarUsuario"; 

function App() {
  return (
    <UserProvider>
      <div>
        <h1>Aplicación con Contexto</h1>
        <MostrarUsuario />
      </div>
    </UserProvider>
  );
}

export default App;

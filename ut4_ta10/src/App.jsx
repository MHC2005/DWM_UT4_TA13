import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true); // Estado para mostrar el loading

  useEffect(() => {
    // llamada a la api
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // Guardar los datos en el estado
        setLoading(false); // Cambiar el estado de loading
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
        setLoading(false); // Cambiar el estado de loading
      });
  }, []); 

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {loading ? (
        <p>Cargando usuarios...</p> 
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>Nombre de usuario:</strong> {user.username} <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

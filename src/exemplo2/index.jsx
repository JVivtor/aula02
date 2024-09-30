import { useEffect, useState } from "react";

export default function App() {
  
  const [buscar,setBuscar] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta = await fetch('');
        const dados =  await resposta.json();              ;
        setBuscar(dados);
    }
    buscarUsuario();
  }, []); //complete o código);

 
  return (
    <>
      <h1>Lista Usuario</h1>
      <ul>
        {usuario.map(usuario => (
          <li key={usuario.id}>
            <h2>{usuario.title}</h2>
            <p>{usuario.description}</p>
            <img src={usuario.image} alt={usuario.title} width={100} />
          </li>
        ))}
      </ul>
    </>
  
  );

}
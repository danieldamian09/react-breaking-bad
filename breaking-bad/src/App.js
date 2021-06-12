import React from 'react'
import styled from 'styled-components'

const Contenedor = styled.div`
  display: flex;
  padding-top: 5rem;
  align-items: center;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid #000;
`;

function App() {

  const consultarApi = () => {
    console.log('consultando....')
  }


  return (
    <Contenedor>
      <Boton
        onClick={() => consultarApi()}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;

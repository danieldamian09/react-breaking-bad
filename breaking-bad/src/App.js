import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Frase from './components/Frase';

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
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  // estado del componente para guardar la frase
  const [frase, guardarFrase] = useState({
    quote:'',
    author: ''
  })


  // Consulta a la api
  const consultarApi = async () => {
    const api =await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    guardarFrase(frase[0])
  }

  useEffect(() => {
    consultarApi()
  }, [])


  return (
    <Contenedor>

      <Frase 
        frase={frase}
      />
      <Boton
        onClick={() => consultarApi()}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;

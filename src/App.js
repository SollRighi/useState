import React, {useState} from 'react';
import styled from 'styled-components';

const StyleApp = styled.div`
  display: flex;
  height: 100vh;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  background-color:${props=>props.color};

  button {
    background-color: white;
    padding: 10px 20px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    transition: 200ms;
    border-radius: 5px;

    :hover {
      background-color:tomato;
    }
    :active {
      transform:scale(0.8);
    }
  }

  h1 {
    text-transform:uppercase;
  }
`


function App() {

  const [title, setTitle] = useState('titulo inicial');
  const [showContent, setShowContent] = useState(false);
  const [color, setColor] = useState('white');

  function handleTitle () {
    (title === 'titulo inicial' ? setTitle('titulo modificado') : setTitle('titulo inicial'))
  }

  function handleContent () {
    setShowContent(!showContent);
  }

  function ExclusiveContent () {
    return (
      <h2> No ceú tem pão? </h2>
    )
  }

  function handleColor () {
    setColor(gerarCor());
  }

  function gerarCor(opacidade = 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
 }

  return (
    <StyleApp color={color}>
      <h1>{title}</h1>
      <button onClick={handleTitle}>Alterar o titulo</button>
      &nbsp;
      {showContent && <ExclusiveContent />}
      <button onClick={handleContent}>{showContent ? 'Clique para esconder o conteudo': 'Clique para exibir o conteudo'}</button>
      &nbsp;
      <button onClick={handleColor}>Alterar a cor</button>
    </StyleApp>
  );
}

export default App;

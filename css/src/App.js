
import { useState } from 'react';

import MyComponent from "./components/MyComponent";
import Title from './components/Title';

import './App.css';

function App() {
  const n = 15;
  const [name] = useState("Fernanda");
  const redTitle = false;

  return (
    <div className="App">
      {/*CSS Global*/}
      <h1>React CSS Global</h1>
       {/*CSS Componente*/}
      <MyComponent/>
      <p>Este parágrafo é do App.js</p>
      {/*Inline CSS*/}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
      {/*CSS Inline dinâmico*/}
      <h2 style={n>10?({color:"purple"}):({color:"pink"})}> CSS Dinâmico</h2>

      <h2 style={name==="Fernanda" ? {color:"green", backgroundColor: "#000"} : null}> Teste nome</h2>
      {/*Classe dinâmica - INDICADO*/}
      <h2 className={redTitle ? "red-title" : "title" }> Este título vai ter classe dinâmica</h2>

      {/*CSS Modules - é Scoped - INDICADO*/}
      <Title/>
    </div>
  );
}

export default App;

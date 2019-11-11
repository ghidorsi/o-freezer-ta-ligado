import React, { useState, useEffect } from "react";
import pistolJacquin from "./jacka-putaco.jpeg";
import niceJacquin from "./jacquin_de_boa.jpg";
import frasesPutaco from "./frasesPutaco.json"
import "./App.css";
import styled from "styled-components";

const Jacquin = styled.img``;

const Title = styled.h1`
  text-transform: uppercase;
  margin-bottom: 100px;
`;

const JacquinSays = styled.h2`
  font-size: 58px;
  text-transform: uppercase;
`;

const Container = styled.div``;

const veSeTaLigado = () => {
  const currentHour = new Date().getHours();
  return currentHour >= 10 && currentHour <= 22;
};

const fraseJacquinPutaco = () => {
  return frasesPutaco[Math.floor(Math.random() * frasesPutaco.length)];
}

const JacquinPutaco = () => (
  <>
    <Jacquin src={pistolJacquin} className="App-logo" alt="SAI DAQUI" />
    <JacquinSays>{fraseJacquinPutaco()}</JacquinSays>
  </>
);

const JacquinDeBoa = () => (
  <>
    <Jacquin src={niceJacquin} className="App-logo" alt="MEU GAROTO" />
    <JacquinSays>Que orgulho</JacquinSays>
  </>
);

const App: React.FC = () => {
  const [taLigado, setLigado] = useState(false);
  useEffect(() => {
    setLigado(veSeTaLigado());
  }, []);

  return (
    <Container className="App">
      <header className="App-header">
        <Title>O Freezer tá ligado?</Title>
        {taLigado ? <JacquinDeBoa /> : <JacquinPutaco />}
      </header>
    </Container>
  );
};

export default App;

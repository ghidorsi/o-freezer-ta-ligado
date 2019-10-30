import React, { useState, useEffect } from "react";
import pistolJacquin from "./jacka-putaco.jpeg";
import niceJacquin from "./jaquin_de_boa.jpg";
import "./App.css";
import styled from "styled-components";

const Jackin = styled.img``;

const Title = styled.h1`
  text-transform: uppercase;
  margin-bottom: 100px;
`

const JackinSays = styled.h2`
  font-size: 58px;
  text-transform: uppercase;
`;

const Container = styled.div``;

const veSeTaLigado = () => {
  const currentHour = new Date().getHours();
  return currentHour > 10 && currentHour < 22;
};


const JaquinPutaco = () => (
  <>
    <Jackin src={pistolJacquin} className="App-logo" alt="SAI DAQUI" />
    <JackinSays>cala su boca</JackinSays>
  </>
);

const JaquinDeBoa = () => (
  <>
    <Jackin src={niceJacquin} className="App-logo" alt="MEU GAROTO" />
    <JackinSays>Que orgulho</JackinSays>
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
        {taLigado ? <JaquinDeBoa/> : <JaquinPutaco /> }
      </header>
    </Container>
  );
};

export default App;

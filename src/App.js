import React from "react";
import Routes from "./components/Routes";
import "./App.css";
import { Container } from "reactstrap";
import KeyMap from "./components/KeyMap";
import Navigation from "./components/Navigation";


function App() {
  return (
    <KeyMap>
      <Container className="text-center">
        <Navigation />
        <Routes />
      </Container>
    </KeyMap>
  );
}

export default App;

import React from "react";
import Routes from "./components/Routes";
import "./App.css";
import { Container } from "reactstrap";
import KeyMap from "./components/KeyMap";

function App() {
  return (
    <KeyMap>
      <Container className="text-center">
        <Routes />
      </Container>
    </KeyMap>
  );
}

export default App;

import React from "react";

import Jumbotron from "./components/Jumbotron/Jumbotron";
import About from "./components/About/About";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <About />
      <Team />
    </div>
  );
}

export default App;

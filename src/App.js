import React from "react";

import Jumbotron from "./components/Jumbotron/Jumbotron";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <About />
      <Team />
      <Events />
      <Contact />
    </div>
  );
}

export default App;

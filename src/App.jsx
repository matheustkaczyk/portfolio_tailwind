import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects";
import Services from "./components/Services"

function App() {

  return (
    <div className="App bg-main">
      <Header />
      <Home />
      <Services />
      <Projects />
    </div>
  );
}

export default App

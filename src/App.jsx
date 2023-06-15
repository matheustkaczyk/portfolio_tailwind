import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects";
import Services from "./components/Services"
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App bg-main">
      <Header />
      <Home />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}

export default App

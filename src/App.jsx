import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"

function App() {

  return (
    <div className="App bg-yellow-400">
      <div className="flex justify-center">
        <div className="max-w-7xl">
          <Header />
          <Home />
          <Services />
        </div>
      </div>
    </div>
  );
}

export default App

import Header from "./components/Header"
import Home from "./components/Home"

function App() {

  return (
    <div className="App bg-yellow-400">
      <div className="flex justify-center">
        <div className="max-w-7xl">
          <Header />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App

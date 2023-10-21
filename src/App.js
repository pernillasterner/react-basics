import { Navbar } from "./Navbar";
import { Home } from "./Home";

// Root component of the application
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

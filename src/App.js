import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Create } from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BlogDetails } from "./BlogDetails";

// Root component of the application
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

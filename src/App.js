import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/header";
import Error from "./pages/Error";

import Homepage from "./pages/homePage";
import Moviesdetails from "./pages/moviesdetails";
import Favourite from "./pages/favourite";
function App() {
  return (
   
    <Router>
      <Header/>
        <div className="container my-5">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/homePage" exact component={Homepage} />
            <Route path="/homePage/:id" exact component={Moviesdetails} />
            <Route path="/favourite" exact component={Favourite} />

            <Route path="*" exact component={Error} />
          </Switch>
        </div>
      
    </Router>
  );
}

export default App;

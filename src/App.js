import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Nominated from "./components/Nominated";
import Add from "./components/Add";
import "./lib/font-awesome/css/all.min.css";
import { useStateValue } from "./contextAPI/StateProvider";
import Footer from "./components/Footer";


function App() {

  const [state, dispatch] = useStateValue();
  useEffect(() => {
    localStorage.setItem("nominatedMovies", JSON.stringify(state.nominees))
  }, [state]);

  return (
    <Router>

        <Header />
        
        <Switch>
        <Route exact path="/">
          <div className="mainApp">
            <Nominated />
            <Footer />
          </div>
        </Route>

          <Route path="/add">
            <Add/>
          </Route>
        </Switch>

        </Router>
  );
}

export default App;

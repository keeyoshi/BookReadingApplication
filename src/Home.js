import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

function Home() {
  return (
    <Router>
      <div className="container">
      <br/>
      <Route path="/" component={Login} />
      <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default Home;

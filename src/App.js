import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Register from "./components/Register";
import Login from './components/Login';
import NoMatch from './components/NoMatch';
import Home from './components/Home';

function App() {
  return (
     <switch>
    <Router>
      <div className="container">
       
        <br/>
      <Route exact path='/' component={Login} />
      <Route path="/exercise" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home}/>

      </div>
    </Router>
    </switch>
  );
}

export default App;

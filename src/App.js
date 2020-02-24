import React from 'react';
import {Container} from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

<<<<<<< HEAD
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
=======
import Login from './components/Login';
import Register from './components/Register'
import ExerciseList from './components/Exercise-List';
import EditExercise from './components/Edit-Exercise';
import CreateExercise from './components/Create-Exercise';
import Createuser from './components/CreateUser';

function App() {
  return (
   <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register}/>
          <Route path='/exercise' component={ExerciseList}/>
          <Route path='/edit' component={EditExercise}/>
          <Route path='/create' component={CreateExercise}/>
          <Route path='/user' component={Createuser}/>
        </Switch>
      </BrowserRouter>

    </Container>
>>>>>>> 4ca1fd2602c9cfbfd052d00e948d21db2c4877d0
  );
}

export default App;

import React from 'react';
import {Container} from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

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
  );
}

export default App;

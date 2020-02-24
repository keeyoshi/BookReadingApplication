import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
<<<<<<< HEAD:src/components/exercises-list.component.js
import NavBar from './navbar.component';
import Footer from './Footer';
=======
import NavBar from './Navbar'

>>>>>>> 4ca1fd2602c9cfbfd052d00e948d21db2c4877d0:src/components/Exercise-List.js

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>EDIT</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>DELETE</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
<<<<<<< HEAD:src/components/exercises-list.component.js
        <NavBar/>
        <br />
=======
          <NavBar />
>>>>>>> 4ca1fd2602c9cfbfd052d00e948d21db2c4877d0:src/components/Exercise-List.js
        <h3>Logged Exercises</h3>
        <br/>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>User</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
        <Footer/>
      </div>
    )
  }
}
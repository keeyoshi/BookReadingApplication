import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD:src/components/create-user.component.js
import NavBar from './navbar.component';
import Footer from './Footer';
import user1 from "./Image/user1.png"

=======
import Navbar from './Navbar';
>>>>>>> 4ca1fd2602c9cfbfd052d00e948d21db2c4877d0:src/components/CreateUser.js

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
<<<<<<< HEAD:src/components/create-user.component.js
        <NavBar />
        <br/>
        <h3>Add User</h3>
        <br/>
=======
          <Navbar/>
        <h3>Create New User</h3>
>>>>>>> 4ca1fd2602c9cfbfd052d00e948d21db2c4877d0:src/components/CreateUser.js
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-danger" />
          </div>
        </form>
        <br/>
        <div className="container-fluid">
        <img src={user1} height="350px" align="center"/></div>
        <Footer />
      </div>
    )
  }
}
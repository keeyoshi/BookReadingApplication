import React, { Component } from 'react'
import { Button, Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap'
import { withRouter } from 'react-router-dom'

class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/')
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <Navbar color='dark' dark expand='md'>
                <NavbarBrand href='/home'>Exercise Tracker</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink href='/exercise'>List</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/create'>Add Exercise</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/user'>Add User</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button color='warning' onClick={this.handleLogout}> Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Navigation)

<<<<<<< HEAD:src/components/navbar.component.js
=======
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/exercise" className="navbar-brand">ExerciseTracker Now</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/exercise" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Logout</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
>>>>>>> 4ca1fd2602c9cfbfd052d00e948d21db2c4877d0:src/components/Navbar.js

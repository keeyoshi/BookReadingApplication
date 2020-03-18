import React, { Component } from 'react'
import { Button, Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap'


export default class Navigation extends Component {

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
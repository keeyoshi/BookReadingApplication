import React, { Component } from 'react'
import { Button,Form,FormGroup,label,Input,FormText} from 'reactstrap';
<<<<<<< HEAD
import'./style.css';
=======
import'./Style.css';
>>>>>>> 4ca1fd2602c9cfbfd052d00e948d21db2c4877d0
import{Link, Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: '',
             isLoggedIn: false
        }
    }

    
    handleChange=(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit=(event) =>{
        event.preventDefault();
        axios.post('http://localhost:5000/staffs/login', this.state)
        .then((response)=>{
            console.log(response)

            localStorage.setItem('token', response.data.token)
            this.setState({isLoggedIn:true})
        }).catch((err)=>console.log(err.response.data))
        this.setState({email: '', password: ''})
    }

    render() {
        if(this.state.isLoggedIn){
<<<<<<< HEAD
            return <Redirect to='/home'/>
        }
        return (
            <div className="box">
                <h1>Staff Login Page</h1>
                <Form>
                    <FormGroup>
                        <label for='email'>Staff Email</label>
                        <Input type="email" id='email' name='email' required placeholder="Enter Email" value={this.state.email} onChange={this.handleChange}/>
=======
            return <Redirect to='/exercise'/>
        }
        return (
            <div className="box">
                <h1>LOGIN FORM</h1>
                <Form>
                    <FormGroup>
                        <label for='email'>Email</label>
                        <Input type="email" id='email' name='email' placeholder="Enter Email" value={this.state.email} onChange={this.handleChange}/>
>>>>>>> 4ca1fd2602c9cfbfd052d00e948d21db2c4877d0
                    </FormGroup>

                    <FormGroup>
                        <label for='password'>Password</label>
<<<<<<< HEAD
                        <Input type="password" id='username'required name='password' placeholder="Enter Password"  value={this.state.password} onChange={this.handleChange}/>
                    </FormGroup>

                    <Button className="btn-primary" onClick={this.handleSubmit}>Login</Button>
                    <FormText>Create New Staff<Link to='/register'>
                    <label>Register here</label></Link></FormText>
=======
                        <Input type="password" id='username' name='password' placeholder="Enter Password"  value={this.state.password} onChange={this.handleChange}/>
                    </FormGroup>

                    <Button className="btn-primary" onClick={this.handleSubmit}>Login</Button>
                    <FormText>Not register yet?<Link to='/register'>Register here</Link></FormText>
>>>>>>> 4ca1fd2602c9cfbfd052d00e948d21db2c4877d0
                    </Form>
            </div>
        )
    }
}
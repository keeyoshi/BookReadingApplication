import React, { Component} from 'react'
import Navbar from "./navbar.component";
import Footer from "./Footer";
import './home.css'
import { Container, Row } from 'reactstrap';
import image1 from "./Image/4ty.png";
import image2 from "./Image/exercise2.jpg";


export default class Home extends Component {
    render() {
        return (
            <div class="container-fluid">
                <Navbar/>
                <br/>
                <h1 >Exercise Tracker</h1>
                <Container fluid={true} align="center" >
                <h2>About Us</h2>
                
                <img src={image2} height="325px"/>
                <p>Exercise Tracker is a new Organization that Specialized 
                    in tracking user exercise in the field. The staff keep
                     day to day track of user exercise tracker. </p>
                <p>Now day people are being too lazy as they want to improve a lot and want to track thier activity.
                    As our Organzation help user to track thier different exercise activity. As they come to our Organzation they can
                    joined gym class, yoga class, swimming, running, playing etc. All about activity are being tracked for user as they don't need 
                    to track themself
                </p>
                     <img src={image1} height="325px"/>
                    <Row>
                    </Row>
                </Container>              

                <Footer/>
            </div>
        )
    }
}

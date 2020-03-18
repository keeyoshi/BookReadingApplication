import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Style.css";

const FooterPage = () => {
  return (
    <div id="footerMain" class="container clear-top">

          <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Exercise Tracker</h5>
            <p>
             Exercise Tracker a private organization for tracking user different exercise activity and listing
             them for future propose
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
            <li className="list-unstyled">
                <a href="/home">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/exercise">List</a>
              </li>
              <li className="list-unstyled">
                <a href="/create">Add Exercise</a>
              </li>
              <li className="list-unstyled">
                <a href="/user">Add User</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/home"> Exercise Tracker </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>

  );
}

export default FooterPage;
import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>

      <nav className="navbar  bg-dark navbar-dark navbar-expand-lg nav-nav">
      <div className="img-logo">
         <Link to="/">
          <img
            className="navbar-brand ml-5"
            src="https://files.slack.com/files-pri/TLQLJCEGJ-FPR5JSUTT/contactus-lostandfound__1_.jpg"
            alt="logo"
            style={{ width: "80px" }}
          />
        </Link>


              <Link className="nav-link text-white text-uppercase ml-5" to="/">
                <i className="fas fa-home" style={{ margin: "5px" }} />
                Home
                <span className="sr-only">(current)</span>
              </Link>
          
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/contacts"
              >
                Contact Us
              </Link>
        
          </div>
            <div className="auth">
              <Link to="/login">
                <button
                  className="btn btn-primary   my-2 my-sm-0"
                  type="button"
                >
                  Sign in
                </button>
              </Link>

              <Link to="/Signup">
                <button
                  className="btn btn-outline-primary  my-2 my-sm-0"
                  type="button"
                >
                  Sign Up
                </button>
              </Link>
            </div>
 
      </nav>
      
    </header>
  );
}

export default Navbar
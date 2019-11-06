
import React, { Component } from 'react'
import { Link,withRouter  } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: "", password: "", login:""
        }
    }
    handleChange=e=>{
 this.setState({

    [e.target.name]: e.target.value

 })
 }
 register = () => {
    
    const { login, email, password } = this.state;
    console.log(login,email,password)
    if(login==='' || email==='' || password==='') return alert('champs vides')
    
    if(! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
    return alert('enter a valid email ')
    axios
      .post("/user/register", {
        login,
        email,
        password
      })
      .then(res => this.props.history.push('/login'));
  };




//   configtoken = () => {
//     const token = localStorage.getItem("token");
//     const config = {
//       headers: {
//         "content-type": "application/json"
//       }
//     };
//     if (token) {
//       config.headers["Authorization"] = token;
//     }
//     return config;
//   };

//   componentDidMount() {
//     axios
//       .get("/user/current", this.configtoken())
//       .then(res => console.log(res.data))
//       .catch(err => console.log(err.response.data));
//   }

    render() {
        return (
            <section className="my-5 py-5">
      <div className="container">
      <div class="container py-5">
  <div class="row">
      <div class="col-md-12">
          <h2 class="text-center mb-5"></h2>
          <div class="row">
              <div class="col-md-6 mx-auto">
                  <div class="card border-secondary">
                      <div class="card-header">
                          <h3 class="mb-0 my-2">Sign Up</h3>
                      </div>
                      <div class="card-body">
                          <form class="form" role="form" autocomplete="off">
                              <div class="form-group">
                                  <label for="inputName">Name</label>
                                  <input type="text" class="form-control loginInput" id="inputName" placeholder="full name" name="login"  onChange={this.handleChange}/>
                              </div>
                              <div class="form-group">
                                  <label for="inputEmail3">Email</label>
                                  <input type="email" class="form-control loginInput" id="inputEmail3" placeholder="email@gmail.com" required="" name="email"  onChange={this.handleChange}/>
                              </div>
                              <div class="form-group">
                                  <label for="inputPassword3">Password</label>
                                  <input type="password" class="form-control loginInput" id="inputPassword3" placeholder="password" title="At least 6 characters with letters and numbers" required="" name="password"  onChange={this.handleChange}/>
                              </div>
                              <div class="form-group">
                                  <label for="inputVerify3">Verify</label>
                                  <input type="password" class="form-control loginInput" id="inputVerify3" placeholder="password (again)" required="" name="pasword"  onChange={this.handleChange}/>
                              </div>
                              <div class="form-group">
                              {/* <Link className="nav-link text-white text-uppercase ml-5" to="/login"> */}
                                  <button type="button" class="btn btn-dark btn-lg float-right" onClick={this.register} value="Register">
                                      
                                       Register {" "}</button>
                                  {/*  </Link>    */}
                              </div>
                          </form>
                                </div>
                                  </div>
                          </div>
          </div>
                 
      </div>
 
  </div>

</div>

      </div>
    </section>
        )
    }
}

export default withRouter(Signup)


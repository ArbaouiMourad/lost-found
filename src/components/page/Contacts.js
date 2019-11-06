import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addinfos} from "../../actions";
import { connect } from "react-redux";

class Contacts extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:"",phone:"", message:"", name:""
    }
  }

  handlechange=(e)=>{this.setState({
         [e.target.name]:e.target.value
  })
}
  render() {
    console.log(this.state)  
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://wego.here.com/?map=36.90256,10.10693,13,normal&fb_locale=fr_FR"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0"
                }}
                allowFullscreen
              />
            </div>
           
           
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    onChange={this.handlechange}
                    className="form-control loginInput"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    onChange={this.handlechange}
                    name="email"
                    className="form-control loginInput"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    onChange={this.handlechange}
                    name="phone"
                    className="form-control loginInput  "
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  className="form-control loginInput"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                  name="message"
                  onChange={this.handlechange}
                />
              
                <Link className="btn btn-outline-primary text-uppercase mt-1" to="/"  onClick={()=>{this.props.addinfos(this.state)}}>
                  <i className="fa fa-paper-plane-o" aria-hidden="true" />
                  <i className="fab fa-telegram-plane" />
                  &nbsp;
                  Send 
                </Link>

              
              
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
} 

export default connect(
  null,
  { addinfos }
)(Contacts);
{/* <button onClick={ 
  () => {this.props.addinfos(this.state)
}} >
    </button> */}
    // notifications

    // onClick={()=>this.props.addinfos(this.state)}
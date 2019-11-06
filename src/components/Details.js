import React, { Component } from "react";
import Edit from './Edit'
import { connect } from "react-redux";
import {  deleteinfos } from "../actions";
import { Link } from "react-router-dom";

import Card from "./Card";
import axios from "axios";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: { name: "", phone: "", image: "", subject: "", objet: "" }
    };
  }
  getinfo() {
    axios.get(`/info `).then(response => {
      if (response.data) {
        console.log("response", response);
        this.setState({
          info: response.data.find(e => e._id === this.props.match.params.id)
        });
      }
    });
  }

  componentDidMount() {
    this.getinfo();
  }
  render() {
  
    return (
      <div className="info-card " style={{ display: "flex" }}>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Settings
          </button> 
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

        
            <Edit id={this.props.match.params.id} info={this.state.info}/>
   
            


        <Link to='/' onClick={()=>this.props.deleteinfos(this.state.info._id)} className="dropdown-item">
             Delete
          </Link>
          </div>
         </div>
        
        <Card info={this.state.info} />
        
      </div>
    );
  }
}

export default connect(
  null,
  { deleteinfos }
)(Details);

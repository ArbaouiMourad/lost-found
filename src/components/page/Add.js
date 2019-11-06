import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import { addinfos} from "../../actions";


class Add extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"",subject:"",phone:"",image:"" ,objet:""
       
    }
    
  }
  
  
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
                        <h3 class="mb-0 my-2">Please add the information of the lost item</h3>
                    </div>
                    <div class="card-body">
                        <form class="form" role="form" autocomplete="off" >
            <div class="form-group ">
             <label class="control-label " for="name">
              Name
             </label>
             <input class="form-control" id="name" name="name" type="text" onChange={e=>{this.setState({name:e.target.value})}}/>
            </div>
            <div class="form-group ">
             <label class="control-label " for="subject">
              Subject
             </label>
             <input class="form-control" id="subject" name="subject" type="text" onChange={e=>{this.setState({subject:e.target.value})}}/>
            </div>
           
            <div class="form-group ">
             <label class="control-label " for="tel">
              Phone #
             </label>
             <input class="form-control" id="tel" name="tel" type="text"onChange={e=>{this.setState({phone:e.target.value})}}/>
            </div>
            <div class="form-group ">
             <label class="control-label " for="objet">
             Objet
             </label>
             <input class="form-control" id="objet" name="objet" placeholder="........." type="text" onChange={e=>{this.setState({objet:e.target.value})}}/>
            </div>
            <div class="form-group">
            <label class="control-label " for="image">
              Image
              </label>
        
             <input class="form-control" id="image" name="image" placeholder=".........." type="url" onChange={e=>{this.setState({image:e.target.value})}}/>
             </div>
             <div>
               <Link to ='/'>
              <button class="btn btn-primary " name="button" type="button" onClick={ 
                () => {this.props.addinfos(this.state) 
              } }     >
               ADD 
              </button>
              </Link>
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


export default connect(
  null,
  { addinfos }
)(Add);



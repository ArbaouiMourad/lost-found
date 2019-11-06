import React, { Component } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import { connect } from "react-redux";
import { getinfos, deleteinfos,searchinfos} from "../../actions";
import YYYYYYY from "../layouts/props"
export class Home extends Component {
  componentWillMount() {
    this.props.getinfos();
  }



  render() {
     console.log(this.props.info)
    return (<div>
      <Carousel />
      <main className="container">
         
        <YYYYYYY />
         <form className="form-inline my-2 d-flex justify-content-center align-items-center">
        <input
          className="form-control mr-sm-2 w-25"
          type="search"
          onChange={(e)=>this.props.searchinfos(e.target.value)}
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-primary  my-2 my-sm-0">
          Search
        </button>
      </form>
       
        <div className="cards">
           {this.props.info && this.props.info.filter(e => 
             e.objet  &&  e.objet.toLowerCase().includes(this.props.search.toLowerCase()))
            .map(e => (
              <Card 
                key={e._id}
                info={e}
                delete={() => this.props.deleteinfos(e._id)}
                getinfos={this.getinfos}
              />
            ))} 
        </div>
       
      </main>
      </div>
    );
  }
}

export default connect(
  state => {
    return { info: state.info, search: state.inputSearch };
  },
  { getinfos, deleteinfos,searchinfos}
)(Home);

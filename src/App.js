import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Switch, Route } from "react-router-dom";

import Home from "./components/page/Home";
import Contacts from "./components/page/Contacts";
import Login from "./components/page/login";
import Signup from "./components/page/Signup";
import Add from "./components/page/Add";
import {PrivateRoute} from './components/page/PrivateRoute'
import Details from "./components/Details";

const App = () => {
    return (
      <div className="container-fluid appContainer">
        <Navbar />
       
        <Switch>
          <Route exact path="/" component={Home}  />
         <Route path="/contacts" component={Contacts} />
          <Route exact path="/login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <PrivateRoute exact path="/Add" component={Add} />
          <Route path="/:id" component={Details}/> 

        </Switch>
     
        <Footer />
      </div>
    );
  }


export default App;

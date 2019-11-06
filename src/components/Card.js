import React from 'react';
import { Link } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Cards = (props) => {
  return (
    <Link to ={`/${props.info._id}`} >
    
      <Card className="card">
        <CardImg top className="imgcard" src= {props.info.image} alt="image alt text here"/>
        <CardBody>
          <CardTitle>Name:{props.info.name}</CardTitle>
          <CardSubtitle>Subject:{props.info.subject}</CardSubtitle>
          <CardText>phone:{props.info.phone}</CardText>
          <CardText>Objet:{props.info.objet}</CardText>          
        </CardBody>
       
      </Card>
     </Link>
   
  );
};

export default Cards;
















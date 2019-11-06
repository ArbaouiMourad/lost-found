import React, { Component } from 'react'

export default class props extends Component {
    render() {
        return (
            <div className="apropos">
               <div className="box">
                   <img className="propos-img img-fluid"src="https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I="/>
                   <p>Grâce à ce site j'ai trouvé mon porte-monnaie, merci beaucoup </p>
                </div>  
                <div className="box">
                   <img className="propos-img img-fluid"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aFiTcNgIIa2WCgh2Qw6yhkOhyX2OByyMPKoeJorWxbVx9oqF&s"/>
                   <p>Grâce à cette communauté , rien ne me perd plus !</p>
                </div> 
                <div className="box">
                   <img className="propos-img img-fluid"src="https://image.freepik.com/photos-gratuite/portrait-homme-affaires-indien-adulte-adulte-souriant_1262-16457.jpg"/>
                   <p>je suis content d'avoir découvert une communauté tunisienne si fidèle </p>
                </div> 
            </div>
        )
    }
}

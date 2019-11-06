const express = require("express")
const mongoose = require('mongoose')
const config= require('config')
const passport = require("passport");
const app = express()



// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// passport
app.use(passport.initialize());
require("./middleware/passport")(passport);

// connect db
require("./config/db")()
//routesApi
app.use('/info',require('./routes/info'))
app.use("/user", require("./routes/users"));
app.get("/sendmail",(req,res)=>{
    console.log('req aaaaaa', req.query.email)
    nodemailer.createTestAccount((err, account) => {
      let transporter = nodemailer.createTransport({
          host: 'smtp.googlemail.com', // Gmail Host
          port: 465, // Port
          secure: true, // this is true as port is 465
          auth: {
              user: 'arbaouimrd@gmail.com', //Gmail username
              pass: '52596482.52596482' // Gmail password
          }
      });    let mailOptions = {
          from: "arbaouimrd@gmail.com",
          to: req.query.email,                                       // Recepient email address. Multiple emails can send separated by commas
          subject: 'Welcome life up',
          text: req.query.text
      };    transporter.sendMail(mailOptions, (error, info) => {
        console.log('test')
          if (error) {
              return console.log(error);
          }
          res.send('done')
          console.log('Message sent: %s', info.messageId);
      });
   });
   })

//run server
const port = process.env.PORT || 5000

app.listen(port, err => {
    if (err) 
        console.log("cannot connect to database")
    console.log(`server is running on port ${port}`)
})

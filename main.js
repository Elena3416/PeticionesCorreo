var nodemailer = require("nodemailer");
var express = require("express");
var app = express();

app.post("/send-email", (req, res) =>{
    var transporter = nodemailer.createTransport({
        host:"smtp.ethereal.email",
        port:587,
        secure: false,
        auth: {
            user: 'aleen.keeling@ethereal.email',
            pass: 'rx1qCxRrDeWpUSZs6v'
        },
    });

    var mainOptions = {
        from: "Remitente",
        to: "laurarubalcava5@gmail.com",
        subject: "Enviado desde nodemailer",
        text:"¡Hola Mundo!"
    }

    transporter.sendMail(mainOptions, (error )=>{
        if(error){
            res.status(500).send(error.message);
        }else{
            console.log("Email enviado");
            res.status(200).jsonp(req.body);
        }
    });
});



app.listen(3000, () => {
    console.log("Servidor en => http://localhost:3000");
});
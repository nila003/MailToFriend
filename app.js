const dotenv=require("dotenv");
require('dotenv').config();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
    },
});

const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: 'niladeepthi@gmail.com', 
    subject: 'Mail a friend', 
    text: 'Hope you are doing well!', 
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred: ', error.message);
    }
    console.log('Email sent successfully: ', info.response);
});

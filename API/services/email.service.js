var nodemailer = require('nodemailer');
const emailConf = require('../config/email.conf');


var transporter = nodemailer.createTransport(emailConf);

const email = {
    mailOptions : (data) => {

        //console.log(req.body);çç

        return {
            from: 'api.so2020@gmail.com', // sender address
            to: ['pruebasos@mailinator.com'], // list of receivers
            subject: 'News of the day', // Subject line
            html: ` <p><strong>Source:</strong> ${data.source.name}</p>
                    <p><strong>Author:</strong> ${data.author}</p>
                    <p><strong>Title:</strong> ${data.title}</p>
                    <p><strong>Description:</strong> ${data.description}</p>
                    <p><strong>Url:</strong> <a href="${data.url}">${data.url}</a> </p>
                    <p><strong>Url To Image:</strong> <a href="${data.urlToImage}">${data.urlToImage}</a></p>
                    <p><strong>Published at:</strong> ${data.publishedAt}</p>
                    <p><strong>Content:</strong> ${data.content}</p>`, // plain text body
        }
    },
    
    sendMail : (data, callback) => {

        options = email.mailOptions(data);
        transporter.sendMail(options, function(err, cb){
            if(err){
                console.log(err);
            }else{
                callback();
            }
    
        });
    }

}

module.exports = email;
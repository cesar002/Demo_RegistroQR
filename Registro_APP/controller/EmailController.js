const EmailTemplate = require('email-templates').EmailTemplate;
const nodemailer = require('nodemailer');
const path = require('path');
const QR = require('./QRImageGenerator');

Promise = require('bluebird')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'supertopo002@gmail.com',
        pass: 'gundam000'
    },
    tls: {
        rejectUnauthorized: false
    }
});


function _sendEmail(obj) {
    transporter.sendMail(obj);
}

function loadTemplate(templateName, params) {
    let template = new EmailTemplate(path.join(__dirname, '../templates', templateName));

    return new Promise((resolve, reject) => {
        template.render(params, (err, sucess) => {
            if(err) reject(err);
            else resolve({
                email: sucess,
                params
            });
        })
    })
}

exports.sendMail = function(userData) {
    return new Promise((resolve, reject) => {
        loadTemplate('boleto', userData).then((result) => {
            _sendEmail({
                to: result.params.email,
                from:'supertopo002@gmail.com',
                subject: result.email.subject,
                html: result.email.html,
                // text: result.email.text
            })
        
            QR.generateQRCode(result.params.codigo);
            resolve();
        }).catch(error => {
            reject(error);
        })
    })
    
}

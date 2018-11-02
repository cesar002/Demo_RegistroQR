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



loadTemplate('boleto',{ email:'soul.unleashed13@gmail.com', codigo:'asqwasd54545445' }).then((result) => {
    _sendEmail({
        to: result.params.email,
        from:'supertopo002@gmail.com',
        subject: result.email.subject,
        html: result.email.html,
        // text: result.email.text
    })
}).then(() => {
    QR.generateQRCode('asqwasd54545445')
})

// const sendTemplate = transporter.templateSender(
//     new Email('/templates/boleto'),{
//         from: 'supertopo002@gmail.com'
// })


// exports.senEmail = function(emailP, boletoFolio){
//     return new Promise((resolve, reject) => {
//         // sendTemplate({
//         //     to: email,
//         //     subject: 'Codigo Para la convencion'
//         // },{
//         //     codigo: boletoFolio
//         // },(err, info) => {
//         //     if(err){
//         //         reject(console.log('Error al mandar el correo ', err))
//         //     }

//         //     resolve();
    
    
//         // })


//         const email = new Email({
//             message:{
//                 from: 'supertopo002@gmail.com'
//             },
//             transport: transporter
//         })

//         email.send({
//             template: '/templates/boleto',
//             message:{
//                 to: emailP,
//                 attachments: [
//                     {
//                       filename: 'text1.txt',
//                       content: '¡confirmado!'
//                     }
//                   ]
//             },
//             locals:{
//                 codigo: boletoFolio
//             }
//         }).then( resolve() )
//         .catch( reject( 'Error al enviar email') )

//     })

// }
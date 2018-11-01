const Email = require('email-templates').EmailTemplate;
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'supertopo002@gmail.com',
        pass: 'gundam000'
    }
});

const sendTemplate = transporter.templateSender(
    new Email('../templates/email.pug'),{
        from: 'supertopo002@gmail.com'
})


exports.senEmail = function(email, boletoFolio){
    return new Promise((resolve, reject) => {
        sendTemplate({
            to: email,
            subject: 'Codigo Para la convencion'
        },{
            codigo: boletoFolio
        },(err, info) => {
            if(err){
                reject(console.log('Error al mandar el correo ', err))
            }

            resolve();
    
    
        })
    })

}
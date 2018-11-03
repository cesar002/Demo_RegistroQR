const path = require('path');
const qr = require('qr-image');


exports.generateQRCode = function(code) {

    try{
        let qr_png = qr.image(code, { type: 'png' })
        let codename = `${code}.png`
        console.log(codename)
        qr_png.pipe(require('fs').createWriteStream(path.join(__dirname, '../public/codes', codename)));

        //return codename;
    }catch (err) {
        console.log('error al exportar imagen', err);

        //return null;
    }
    
}
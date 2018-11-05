const moment = require('moment');

exports.getCurrentTime = function(){
    return moment().format('YYYY-MM-DD HH:mm:ss')
}
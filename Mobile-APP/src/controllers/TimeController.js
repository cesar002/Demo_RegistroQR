import moment from 'moment';

const timeController = (function() {
    return {
        getDateConvert,
    }


    function getDateConvert(date){
        return moment(date).format("MM-DD-YYYY")
    }


})()

export default timeController;
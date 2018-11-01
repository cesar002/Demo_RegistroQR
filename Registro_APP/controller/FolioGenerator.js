function random(){
    return Math.random().toString(36).substr(2);
}

exports.generar = function() {
    return random() + random()
}


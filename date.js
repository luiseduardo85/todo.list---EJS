
exports.getDate = function(){
    
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    return today.toLocaleDateString("pt-br", options);

}

exports.getDay = function(){

    const today = new Date();

    const options = {
        weekday: "long"
    };

    let day = today.toLocaleDateString("pt-br", options);
    return day
}
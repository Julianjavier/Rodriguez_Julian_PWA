/**
 * Created with JetBrains WebStorm.
 * User: julianrodriguez
 * Date: 10/22/13
 * Time: 2:46 PM
 * To change this template use File | Settings | File Templates.
 */


window.utils={};

utils.getAva= function(){
    for (i= 0; i<arr.length; i++){
        sum += arr[i]
        return sum/ arr.length
    }
}

utils.fullN= function(){
    function fullName(first, last){
        var full= first+" "+last
        return full
    };
}

utils.wordCount= function(){
    function words(w){
        var sArray = w.split(" ")
        return sArray.length
    }
}

utils.yearPass= function(firstDate, secondDate){
    if(typeof firstDate != 'String'){
    }if(secondDate == undefined){
        secondDate = null;}
    var d1 = new Date(firstDate).getFullYear();
    var d2 = new Date(secondDate).getFullYear();

    if (d1 < d2){d2-d1}
}

utils= function(m,gas,left,ga){
    var mpg= m;
    var gasLeft= gas/left;
    var galons = ga;
    var X= (gasLeft * galons);

    if (((mpg*galons)*gasLeft) > 200) {
        console. log ("Yes, you can make it without stopping for gas!")
    } else {
        console. log ("You only have "+X+" gallons of gas in your tank, better get gas")

    }
}
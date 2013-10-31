/*
	PWA1: Goal7:  Simple Library
*/

document.querySelector("body").style.backgroundColor="#666"


var library = function(){

    return new library.prototype.init();

};

library.prototype = {

    init: function(){},

    elements: []

}; // end prototype

library.prototype.init.prototype = library.prototype;
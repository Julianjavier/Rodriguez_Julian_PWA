/*
	PWA1: Goal7: Simple Library App
*/

(function(){

    var allLinks = document.querySelectorAll('a');

    for(var i = 0; i < allLinks.length; i++){

        allLinks[i].onclick = function(){
            var href = this.getAttribute("href");
            console.log(href);
            return false;
        };

    }

})();  // end wrapper
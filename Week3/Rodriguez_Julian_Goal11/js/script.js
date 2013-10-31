(function (){

    var i = 0;

    function click(){

        document.querySelector("#name").innerHTML= "Name: "+studentArr[i].namE;
        document.querySelector("#address").innerHTML= "Address: "+studentArr[i].fullAddress;
        document.querySelector("#gpa").innerHTML= "GPA: "+studentArr[i].GPA;
        document.querySelector("#date").innerHTML= "Date: "+studentArr[i].idate;
        document.querySelector("#phone").innerHTML= "Phone: "+studentArr[i].phoneN;

        return false;

    }

    var butt= document.querySelector(".buttonred")
    butt.addEventListener("click",click)

})();
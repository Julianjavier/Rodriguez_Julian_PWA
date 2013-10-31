(function (){
 console.log("start")

var names= ["Bob","Julian","Mike","Geralt","Koko"];

var students=[];

var btn1= document.querySelector("#btn1")
var btn2= document.querySelector("#btn2")

    function Student(){
        this.name="";
        this.grade=[];
    }

    Student.prototype.getAvarege= function(){

    }

function create(event){
    var s= new Student();
    s.name= names[~~(Math.random()*names.length)];
    s.grade= Math.round(Math.random()*100);
    students.push(s)
}

function display(event){
    var counter=1;
    students.forEach(function(e){
       console.log("student#"+counter);
       console.log("name:"+e.name);
       console.log("grade:"+ e.grade);
       counter++
       console.log("-----------------------------------------------------------")
   })
}

btn1.addEventListener("click",create)
btn2.addEventListener("click",display)


})();
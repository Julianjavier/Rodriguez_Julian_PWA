
(function (){

window.Person=Person

    Person.actions=["Walk","Poop","Breath","Run"];
    Person.jobs=["Programing","Artist","Dentist","Architecture"];

    Person.prototype.update = function(){
        this.action = Person.actions[Math.floor(Math.random() * 3)];
        this.job = Person.jobs[Math.floor(Math.random() * 3)];
    };


function Person(name, row){
    this.name = name;
    this.row = row;
    };


})();

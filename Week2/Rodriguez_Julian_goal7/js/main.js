// Julian Rodriguez.

// October 15, 2013

// Assignment: Objects

(function (){
var names= ["Julian", "Koko", "Manny", "Jhona", "Mike"];

var people= [];


for(var i = 0; i < 3; i++){
    var nameIndex = Math.floor(Math.random() * names.length);

    console.log(nameIndex);

    var name = names[nameIndex]
    names.splice(nameIndex, 1)
    var person = new Person(name, i+1);
    people.push(person);
}

setInterval(runUpdate, 1000 / 30);

function runUpdate(){

    people.forEach(function(person){
        person.update();
    });

    populateHTML();

}

function populateHTML(e){

    for(var i = 0; i < people.length; i++){

        document.querySelector('#r' + people[i].row + 'c1').innerHTML = people[i].name;
        document.querySelector('#r' + people[i].row + 'c2').innerHTML = people[i].job;
        document.querySelector('#r' + people[i].row + 'c3').innerHTML = people[i].action;

    }

}

})();


(function (){

var student1 = new addStudent("Julian"," 3803 Sutton Place "," Orlando "," Florida ",[4.0,3.5,3.9],"03/10/95","407-345-2002")
var student2 = new addStudent("Mike"," 3803 Low Lake "," Miami "," Florida ",[2.0,4.3,3.5],"12/25/02","787-404-8323")
var studentArr=[student1,student2]


function addStudent(n,s,c,st,g,d,p){
    this.namE =n;
    this.fullAddress=[s,c,st]
    this.GPA =[g] ;
    this.idate=d;
    this.phoneN=p;
}

studentArr.push(new addStudent("Koko","1203 Lake Drive "," San Juan "," Puerto Rico ",[2.0,4.3,3.5],"12/30/91","787-404-8323"))

for (var i=0;i<studentArr.length;i++){
    console.log(studentArr[i])
}

    window.studentArr= studentArr

})();

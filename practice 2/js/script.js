/**
 * Created with JetBrains WebStorm.
 * User: julianrodriguez
 * Date: 10/19/13
 * Time: 10:20 AM
 * To change this template use File | Settings | File Templates.
 */
      console.log("go");
(function(){
    console.log("Can");

    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas)
    canvas.width=400
    canvas.height=400

    var ctx= canvas.getContext("2d")

    var qr= new Image();
    qr.src=

    function onLoad(e){
        ctx.drawImage(qr,0,0,300,300);
        drawChart();   }

    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.lineWidth= 2;
    ctx.moveTo(0,200);
    ctx.lineTo(400,200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.lineWidth= 2;
    ctx.moveTo(200,0);
    ctx.lineTo(200,400);
    ctx.stroke();


    ctx.beginPath();
    var red= ~~(Math.random()*255)
    var green= ~~(Math.random()*255)
    var blue= ~~(Math.random()*255)



    ctx.strokeStyle="rgb("+red+","+green+","+blue+")";
//    ctx.rect(180,180,40,40)
//    ctx.lineWidth= 2;
//    ctx.stroke();

//    for(i=0;i<500;i++){
//        ctx.beginPath();
//        var red= ~~(Math.random()*255)
//        var green= ~~(Math.random()*255)
//        var blue= ~~(Math.random()*255)
//        ctx.strokeStyle="rgb("+red+","+green+","+blue+")";
//        ctx.lineWidth= 2;
//        ctx.moveTo(~~(Math.random()*400),~~(Math.random()*400));
//        ctx.lineTo(~~(Math.random()*400),~~(Math.random()*400));
//        ctx.stroke();
//    }

    setInterval(run, 1000/100);

function run(){
    ctx.clearRect(0,0,400,400)
    ctx.beginPath();
    ctx.fillStyle="ff0000"
    ctx.arc(200,200,~~(Math.random()*200),0,Math.PI*2)
    ctx.fill()
    ctx.stroke();
};

//    ctx.beginPath();
//    ctx.fillStyle="#000000"
//    ctx.font="14px Helvetica"
//    ctx.fillText("Hello World",0,200)
})();

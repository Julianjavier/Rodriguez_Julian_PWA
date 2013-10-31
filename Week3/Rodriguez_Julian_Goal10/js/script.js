
(function(){

var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width=1000;
canvas.height=500;

var ctx= canvas.getContext("2d")

ctx.beginPath();
ctx.strokeStyle="#000000";
ctx.lineWidth= 2;
ctx.moveTo(50,200);
ctx.lineTo(400,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#000000";
ctx.lineWidth= 2;
ctx.moveTo(50,15);
ctx.lineTo(50,200);
ctx.stroke();


//TPS
ctx.beginPath();
ctx.fillStyle="#000000"
ctx.font="14px Helvetica"
ctx.fillText("32",102,180)

    ctx.beginPath();
    ctx.fillStyle="#000000"
    ctx.font="14px Helvetica"
    ctx.fillText("TPS",95,220)

    ctx.rect(90,100,40,100)
    ctx.fillStyle="ff2010";
    ctx.lineWidth= 2;
    ctx.fill();
    ctx.stroke();

//RPG
ctx.beginPath();
ctx.fillStyle="#000000"
ctx.font="14px Helvetica"
ctx.fillText("54",210,180)

    ctx.beginPath();
    ctx.fillStyle="#000000"
    ctx.font="14px Helvetica"
    ctx.fillText("RPG",205,220)

    ctx.rect(200,60,40,140)
    ctx.fillStyle="35D827";
    ctx.lineWidth= 2;
    ctx.fill();
    ctx.stroke();

//RTS
ctx.beginPath();
ctx.fillStyle="#000000"
ctx.font="14px Helvetica"
ctx.fillText("22",310,180)

    ctx.beginPath();
    ctx.fillStyle="#000000"
    ctx.font="14px Helvetica"
    ctx.fillText("RTS",305,220)

    ctx.rect(300,140,40,60)
    ctx.fillStyle="27A2D8";
    ctx.lineWidth= 2;
    ctx.fill();
    ctx.stroke();

})();
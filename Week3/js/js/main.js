

console.log("HEY");

(function(){
   var dom={
       input:document.querySelector("#input1"),
       input:document.querySelector("#input2"),
       btn1:document.querySelector("#btn1"),
       btn2:document.querySelector("#btn2"),
       output1:document.querySelector("#output1"),
       output2:document.querySelector("#output2")
   };

    var pattern1 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    var pattern2 = /^[2-9]\d{2}-\d{3}-\d{4}$/

    dom.btn1.addEventListener("click",eClick);

    dom.btn2.addEventListener("click",onClick);

    function eClick(e){
        console.log("click",dom.input.value)
        var pass= pattern1.test(dom.input.value)
        if (pass){
            dom.output1.innerHTML="E-mail passed"
        } else{
            dom.output1.innerHTML="E-mail failed"
        }
    }

    function onClick(e){
        console.log("click",dom.input.value)
        var pass= pattern2.test(dom.input.value)
        if (pass){
            dom.output2.innerHTML="Number passed"
        } else{
            dom.output2.innerHTML="Number failed"
        }
    }

})();
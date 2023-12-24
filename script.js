let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let output = "";

let arr = Array.from(buttons);
arr.forEach(function(val){
    val.addEventListener("click",function(e){
        console.log(e.target.innerHTML);
        if(e.target.innerHTML == '='){
            output = eval(output)
            input.value = output;
        }else if(e.target.innerHTML == 'CE'){
            output = "";
            input.value = output;
        }else if(e.target.innerHTML == 'DEL'){
            output = output.substring(0, output.length-1)
            input.value = output;
        }else{
            output += e.target.innerHTML;
            input.value=output;
        }
    })
})
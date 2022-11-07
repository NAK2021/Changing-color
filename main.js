let search = document.querySelectorAll('.search');
let container = document.querySelectorAll('.CONTAINER');
search[0].onclick = function(){
    container[0].classList.add('active');
}
search[1].onclick = function(){
    container[1].classList.add('active');
}

changeByUser = () =>{
    const CodeHex1 = document.getElementById("code1").value.toUpperCase();
    const CodeHex2 = document.getElementById("code2").value.toUpperCase();
    let flag = 0;
    for (let i = 0; i < 6; i++){
        if (CodeHex1.charCodeAt(i) <= 47 
        || (CodeHex1.charCodeAt(i) >= 58 && CodeHex1.charCodeAt(i) <= 64) 
        || CodeHex1.charCodeAt(i) >= 71){
            console.log(CodeHex1[i]);
            flag = 1;
            break;
        }
        else if(CodeHex2.charCodeAt(i) <= 47 
        || (CodeHex2.charCodeAt(i) >= 58 && CodeHex2.charCodeAt(i) <= 64) 
        || CodeHex2.charCodeAt(i) >= 71){
            flag = 1;
            break;
        }
    }
    if (flag == 1){
        alert("Your code is wrong");
    }
    else{
        document.getElementById("hex_code1").innerHTML = CodeHex1;
        document.getElementById("hex_code2").innerHTML = CodeHex2;
        var changing1 = document.querySelector("body");
        var changing2 = document.querySelector("body");
        changing1.style.setProperty("--color1-color", "#" + CodeHex1);
        changing2.style.setProperty("--color2-color", "#" + CodeHex2);
    }
}

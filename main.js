change_color = () => {
    let index = 0;
    let colorChange1 = "";
    let colorChange2 = "";
    let arr = ["0","1","2","4","5","6", "7", "8", "9","A","B","C","D","E","F"];
    for (let i = 0; i < 6; i++){
        index = Math.floor(Math.random() * arr.length);
        colorChange1 += arr[index];
        index = Math.floor(Math.random() * arr.length);
        colorChange2 += arr[index];
    }
    document.getElementById("hex_code1").innerHTML = colorChange1;
    document.getElementById("hex_code2").innerHTML = colorChange2;
    var changing1 = document.querySelector("body");
    var changing2 = document.querySelector("body");
    changing1.style.setProperty("--color1-color", "#" + colorChange1);
    changing2.style.setProperty("--color2-color", "#" + colorChange2);
}
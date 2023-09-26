function selectclrg() {
    let box1 = document.getElementById("div1");
    if (box1.style.backgroundColor != "green") {
        box1.style.backgroundColor = "green";
    } else {
        box1.style.backgroundColor = "transparent";
    }
}

function selectclrb() {
    let box2 = document.getElementById("div2");
    if (box2.style.backgroundColor != "blue") {
        box2.style.backgroundColor = "blue";
    } else {
        box2.style.backgroundColor = "transparent";
    }
}
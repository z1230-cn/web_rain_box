let box = document.querySelectorAll(".box");
let box1 = box[0];
let list = document.querySelectorAll(".list")[0];
let gIdx = 0;
let colors = [
    'red',
    'yellow',
    'blue',
    'green',
    'skyblue',
    'mediumpurple',
    'pink',
    'aqua',
    'black',
    'orange',
    
];

box1.onclick = function() {
    if (gIdx === colors.length) gIdx = 0;
    box1.style.borderColor = colors[gIdx];
    box1.style.backgroundColor = colors[gIdx];
    gIdx++;
}

for (let idx in colors) {
    list.innerHTML += `<div class="color" style="color: ${colors[idx]}">${colors[idx]}</div>`
}
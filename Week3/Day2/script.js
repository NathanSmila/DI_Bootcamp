let colors = ["blue", "yellow", "green", "pink"];

let nodeContainer = document.getElementById("container");

for (let i = 0; i < colors.length; i++) {
    let newBtn = document.createElement("button");
    newBtn.classList.add(colors[i]);
    nodeContainer.appendChild(newBtn);
    
}



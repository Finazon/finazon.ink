function enlarge(score, num){
    document.getElementById(`largeimg`).innerHTML=`
    <style>
    .mainbody {
        filter: blur(5px) grayscale(100%);
        pointer-events: none;
    }
    .sidebar {
        filter: blur(5px) grayscale(100%);
        pointer-events: none;
    }
    </style>
    <div class="largediv">
    <h1>Click the Image to return.</h1>
    <h1>${score}</h1>
    </div>
    <img src="../static-assets/bingo/${num}.png" class="largeimg" onclick="remove()" />
    `
}

function remove(){
    document.getElementById(`largeimg`).innerHTML=``
}
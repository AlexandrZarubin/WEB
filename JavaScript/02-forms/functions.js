// JavaScript source code
function Power()
{
let base = document.getElementById("base").value;
let exponent = document.getElementById("exponent").value;
document.getElementById("power").innerHTML = base ** exponent;
}
function GetMouseCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("mouse").innerHTML = `X=${x},Y=${y}`;
}
document.addEventListener("mousemove", GetMouseCoords);

function SwitchBackground() {
    // получаем элемент
    let switchBackground = document.getElementById("switch-background");

    const duration = parseFloat(document.getElementById("themeSpeed").value) || 0;
    document.body.style.transition = `background-color ${duration}s, color ${duration}s`;

    if (switchBackground.style.backgroundImage === 'url("img/moon.png")')
    {
        switchBackground.style.backgroundImage = 'url("img/sun.png")';
        document.body.style.background = "#FFFFFF";
        document.body.style.color = "black";
    }
    else
    {
        switchBackground.style.backgroundImage = 'url("img/moon.png")';
        document.body.style.background = "#1E1E1E"
        document.body.style.color = "#D4D4D4";
    }
}
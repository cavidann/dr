var main = document.createElement("div");
main.className = "main";
document.body.appendChild(main);

main.style.width = "102px";
main.style.height = "764px";
main.style.backgroundColor = "blue";
main.style.position = "relative";

var img = document.createElement("img");
main.appendChild(img);

img.setAttribute("src", "img/body.jpg");
img.setAttribute("height", "768");
img.setAttribute("width", "1024")









main.addEventListener("click", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    var point = document.createElement("div");
    main.appendChild(point);
    point.style.width = "10px";
    point.style.height = "10px";
    point.style.backgroundColor = "red";
    point.style.position = "absolute";
    point.style.left = x - 13 + "px";
    point.style.top = y - 12 + "px";
})

// point.addEventListener("click", function(event) {
//     child.parentNode.removeChild(child);
// })

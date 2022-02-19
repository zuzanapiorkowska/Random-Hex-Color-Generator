
result = document.querySelector(".result");
generator = document.querySelector(".color");

generator.addEventListener("click", function() {
   changeColor();
})

function changeColor() {
    const generatedColor = "#" + Math.random().toString(16).substring(2, 8); //od 2 do 7
    document.body.style.backgroundColor = generatedColor;
    result.innerHTML = generatedColor;
}
window.onload = function () {
    var canvas = document.getElementById("sky");
    var ctx = canvas.getContext("2d");

    //
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // gerar os flocos 
    var mf = 100; // máximo de flocos
    var flakes = [];
    for (var i = 0; i < mf; i++) {
        flakes.push({
            x: Math.random() * W, //width
            y: Math.random() * H, //height
            r: Math.random() * 5 + 2, // mínimo de 2px e máximo de 7px pixels
            d: Math.random() + 1 // densidade do flake
        })
    }

    // desenhar os flocos no canvas
    function drawFlakes() {
        ctx.clearRect(0, 0, W, H); //posição 0 / 0 (topo da tela)
        ctx.fillStyle = "white"; //faz com que todos os flakes sejam brancos
        ctx.beginPath();
        for (var i = 0; i < mf; i++) { // para cada flake
            var f = flakes[i];
            ctx.moveTo(f.x, f.y); // mover para um ponto aleatório da tela
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true); //Math.PI * 2 (fazer um circulo completo)
        }
        ctx.fill();
        moveFlakes(); // animaçao dos flakes
    }
    // animaçao dos flakes
    var angle = 0; // controlar os movimentos direita/esquerda

    function moveFlakes() {
        angle += 0.01;
        for (var i = 0; i < mf; i++) {

            var f = flakes[i];

            // coordenadas x e y de cada flake

            f.y += Math.pow(f.d, 2) + 1; //controla a velocidade de queda dos flakes
            f.x += Math.sin(angle) * 2; // swag

            // quando os flakes chegarem na borda inferior, serao retornadas ao topo 
            if (f.y > H) {
                flakes[i] = { x: Math.random() * W, y: 0, r: f.r, d: f.d };
            }

        }
    }
    setInterval(drawFlakes, 25);

}
document.onmousemove = animateCircles;

var colors = ['#ccc', '#6cf', 'blue']; // sequencia de cores

function animateCircles(event) {
    var circle = document.createElement("div"); // criaçao do elemento (circulo)
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);

    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    var color = colors[Math.floor(Math.random() * colors.length)];
    circle.style.borderColor = color

    circle.style.transition = "all 0.5s linear 0s"; // propriede da transiçao - tempo da transiçao - tipo da transiçao - inicio da transiçao 

    circle.style.left = circle.offsetLeft - 20 + 'px'; //deslocamento (esquerda)
    circle.style.top = circle.offsetTop - 20 + 'px'; // deslocamento (direita)

    circle.style.width = "50px"; // largura circulo
    circle.style.height = "50px"; // altura circulo
    circle.style.borderWidth = "5px"; // largura da borda do circulo
    circle.style.opacity = 0; // opacidade dos circulos em movimento
}

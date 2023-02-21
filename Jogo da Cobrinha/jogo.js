window.onload = function(){
    canvas = document.getElementById("canvas")
    contexto = canvas.getContext("2d")

    //variaveis
    cobra = []
    //posição da cobra
    positionX =10
    positionY = 10
    //posição da comida
    comidaX = 15
    comidaY = 15

    velX = 0 //velocidade horizontal da cobra
    velY = 0 //velocida vertical da cobra
    //tamanho da grade
    grade = 20
    //tamanho inicial da cobra
    tam = 3
}

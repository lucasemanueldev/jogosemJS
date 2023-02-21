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

    //ficar chamando a função jogo de 100 em 100 milisegundos
    setInterval(jogo, 100)

    //controles do game
    document.addEventListener("keydown",function(e){
        switch(e.keyCode){
            //seta direita
            case 39:
                velX = 1;
                velY = 0;
                break;
            //seta esquerda
            case 37:
                velX = -1;
                velY = 0;
                break;
            //seta cima
            case 38:
                velX = 0;
                velY = -1;
                break;
            //seta baixo
            case 40:
                velX = 0;
                velY = 1;
                break;
        }
    })
}
function jogo(){
    //configurações de tela
    contexto.fillStyle = "#201b2c"
    //distância borda horizontal, distância borda vertical, largura, altura
    contexto.fillRect(0,0, 400, 400)

    //cobra se mexendo
    positionX += velX
    positionY += velY

    //espelhar a cobra
    if(positionX < 0){
        positionX = grade
    }
    if(positionX > grade){
        positionX = 0
    }
    if(positionY < 0){
        positionY = grade
    }
    if(positionY > grade){
        positionY = 0
    }
    //configurações da cobra
    contexto.fillStyle = "#8b0000";
    for(let i = 0; i < cobra.length; i++){
        contexto.fillRect(cobra[i].x*grade, cobra[i].y*grade, grade-1, grade-1)
        if(cobra[i].x == positionX && cobra[i].y ==positionY){
            tam = 3
        }
    }

    //posição da cobra
    cobra.push({x: positionX, y: positionY})
    
    //apagar cobra
    while(cobra.length > tam){
        cobra.shift()
    }

    //comida
    contexto.fillStyle = "#dfe4d3"
    contexto.fillRect(comidaX*grade, comidaY*grade, grade-1, grade-1)

    //comendo e crescendo
    if(positionX == comidaX && positionY == comidaY){
        tam++;  
        //comida surge de forma aleatoria
        comidaX = Math.floor(Math.random()*grade);
        comidaY = Math.floor(Math.random()*grade);
    }
}


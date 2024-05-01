//variaveis da bolonha
let xBolinha=300
let yBolinha=200
let diametro=20
let raio=diametro/2

//velocidade da bolinha 
let velocidadeXBolinha=6
let velocidadeYBolinha=6
let velocidadeYOponente

//variavel da raquete
let xRaquete=2
let yRaquete=150
let comprimentoRaquete=10
let alturaRaquete=90

//variavel do oponente
let xRaqueteOponente=538
let yRaqueteOponente=150

let colidiu= false

//placar do jogo
let meusPontos=0
let pontosOponente=0
 
//sons do jogo
let raquetada
let ponto
let trilha

function preload(){
  trilha=loadSound("trilha.mp3")
  ponto=loadSound("ponto.mp3")
  raquetada=loadSound("raquetada.mp3")
}


function setup() {
  createCanvas(550, 400);
  trilha.loop()
}

function draw() {
  background(0);
 mostraBolinha()
movimentaBolinha()
 verificaBorda()
  mostraRaquete(xRaquete,yRaquete)
  mostraRaquete(xRaqueteOponente,yRaqueteOponente)
   movimentaMinhaRaquete()
//  verifiqueColisaoRaquete()
 movimentaRaqueteOponente()
  verifiqueColisaoRaquete(xRaquete,yRaquete)
 verifiqueColisaoRaquete(xRaqueteOponente,yRaqueteOponente)
  incluiPlacar()
  marcaPonto()
}

function mostraBolinha(){
   circle(xBolinha,yBolinha,diametro)
}
function movimentaBolinha(){
 xBolinha+=velocidadeXBolinha;
  yBolinha+=velocidadeYBolinha;  
}
function verificaBorda(){
   
  if (xBolinha +raio>width||
     xBolinha -raio<0){
    velocidadeXBolinha*=-1;
  }
  if(yBolinha +raio>height||
    yBolinha -raio<0){
    velocidadeYBolinha*=-1;
  }
}
function mostraRaquete(x,y){ rect(x,y,comprimentoRaquete,alturaRaquete)
}
function mostraRaqueteOponente(){ rect(xRaqueteOponente,yRaqueteOponente,comprimentoRaquete,alturaRaquete)
}
function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
yRaquete -=10
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10
  }
}
function verifiqueColisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
     velocidadeXBolinha*= -1
    raquetada.play()
  }
}
function verifiqueColisaoRaquete(x,y){
  colidiu=
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio)
  if (colidiu){
    velocidadeXBolinha*= -1
    raquetada.play()
  }
}
function movimentaRaqueteOponente(){
  velocidadeYOponente= yBolinha-yRaqueteOponente-comprimentoRaquete/2 -50
  yRaqueteOponente+= velocidadeYOponente
}
  function incluiPlacar(){
    stroke(255)
   textAlign(CENTER)
    textSize(35)
    fill(color(255,140,0))
    rect(150,0,40,30)
    fill(255)
    text(meusPontos,170,26)
     fill(color(255,140,0))
    rect(400,0,40,30)
    fill(255)
    text(pontosOponente,420,26)
  }
function marcaPonto(){
  if(xBolinha>540){
    meusPontos+=1
    ponto.play()
  }
  if(xBolinha<10){
    pontosOponente+=1
    ponto.play()
  }
}

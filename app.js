let cvs=document.getElementById("canvas");
let ctx=cvs.getContext("2d");

let bg=new Image();
let bird=new Image();
let pipN=new Image();
let pipS=new Image();

bg.src="img/fb-game-background.png";
bird.src="img/birdf.png";

bird.width=35;
bird.height=35;
pipN.src="img/flappybird-pipe.png";

pipS.src="img/flappybird-pipe.png";

let gravity=1.5;
let bY=50;
let bX=50;
let score=0;

var pipe=[];
pipe[0]={
    x:cvs.width,
    y:0
}
let marge=400; // pipe height + spacevide

let moveUp=()=>{
    bY-=20;
}
document.addEventListener('keydown',moveUp);



function draw(){
    ctx.drawImage(bg,0,0);
    ctx.drawImage(bird,bX,bY,35,35);

    // ctx.drawImage(pipN,200,0)
    // ctx.drawImage(pipS,200,marge);

    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipN,pipe[i].x,pipe[i].y)
        ctx.drawImage(pipS,pipe[i].x,pipe[i].y + marge);

        pipe[i].x--;

    if(pipe[i].x == cvs.width-230){
        pipe.push({
            x:cvs.width,
            y:Math.floor(Math.random()* pipN.height) - pipN.height
        });
    }

    if(bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipN.width 
&& (bY<= pipN.height+pipe[i].y || bY+bird.height >= pipe[i].y+marge) || bY + bird.height >= cvs.height-55
            ){
        location.reload()
    }
    if(pipe[i].x==5){
        score++
    }
    }


ctx.font='20px Verdana';
ctx.fillText("Score : "+score,10,25)
bY+=gravity;
requestAnimationFrame(draw)

}

draw();

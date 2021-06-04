noseX = 0;
noseY = 0;
LWx = 0;
RWx = 0;
inde = 100;
function setup(){
canvas = createCanvas(500,500);
video = createCapture(VIDEO);
video.size(550,500);
canvas.position(560 , 150);
video.position(0,150);
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on("pose", gotposes);
}

function draw(){
background("#b3b3b3");
fill("#fcb603");
stroke("#fc0303");
text("R",noseX,noseY,);
textSize(inde);
document.getElementById("s").innerHTML = inde ;
}

function preload(){

}

function modelLoaded(){
console.log("poseNet is inisialized");
}

function gotposes(results)
{
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x  = " + noseX +"nose y = "+noseY);
        LWx = results[0].pose.leftWrist.x;
        RWx = results[0].pose.rightWrist.x;
        console.log("right wrist ="+RWx+"left wrist ="+LWx);
       inde =floor( LWx - RWx );
       console.log(inde);
       
    }
    
}
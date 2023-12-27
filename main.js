video = "";

function preload(){

}
function setup(){
    canvas = createCanvas(480, 360);
    canvas.position(420, 300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 480, 360);
}
function start(){
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded Successfully!");
}


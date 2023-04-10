noseX = 0
noseY = 0

function preLoad()
{
    clown_nose = loadImage("https://i.postimg.cc/fTZJwcFF/download.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
   console.log('Posenet Is Initialized');
}

function gotPoses(results)
{
    if(results.lenght > 0){
        console.log(results);
        noseX = result[0].pose.nose.x-10;
        noseY = result[0].pose.nose.Y-10;
        console.log("nose x = " + nose.X);
        console.log("nose y = " + nose.Y);   
    }
}

function draw()
{
    Image(video,0,0,300,300);
    circle(noseX , noseY , 20);
    fill(255,0,0);
    stroke(255,0,0);
    Image(clown_nose,noseX,noseY,30,30);
}

function take_snapshot()
{
    save('Student.png');
}


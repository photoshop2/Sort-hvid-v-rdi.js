var video;

var x=0;

function setup() {
    createCanvas(windowWidth, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(320*2,240*2);
}

function draw() {
   // background(57);

   

    video.loadPixels();

    var w=video.width;
    var h=video.height;

    copy(video,w/2,0,1,h,x%windowWidth,0,1,h);
    x+=1;

   

}


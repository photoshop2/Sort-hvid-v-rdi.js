var video;
var w;
var h;


function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  w=width;
  h=height;
  
}

function draw() {
  background(51);

  //laver to blleder som er spejlvent af hindanden
  image(video, -w/2, 0, width, height); 
  translate(width,0); 
  scale(-1.0,1.0);    
  image(video, w/2, 0, -width, height); 
}
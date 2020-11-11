
var data=[];
var video;
var cnv;
var vScale = 10;

function setup() {
  cnv=createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  
}

function draw() {
  background(51);
  data=[];
  data.push(vScale);
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + -1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      
      
      noStroke();
      fill(r,g,b);
      data.push(r+" "+g+" "+b);
      rect(x*vScale, y*vScale, vScale, vScale);
    }
  }

}



function mousePressed(){
    saveCanvas(cnv, "hej", "jpg")
    saveStrings(data, "hejjones")
}



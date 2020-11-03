var video;
var button;



function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  button = createButton('Billede');
  button.mousePressed(tagEtBillede);
}

function draw() {
  background(51);
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = ((x+y*width)*4);
      var r = 255-video.pixels[index + 0];
      var g = 255-video.pixels[index + 1];
      var b = 255-video.pixels[index + 2];
          
      pixels[index + 0]=r;
      pixels[index + 1]=r;
      pixels[index + 2]=r;
      pixels[index + 3]=255;

      //print("r er " + r);
      
    }
  }
  updatePixels();

}

function tagEtBillede() {
  image(video,0,0);
}
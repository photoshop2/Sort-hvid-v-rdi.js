var video;
var slider;
var value=10;



function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  slider=createSlider(0, 255, 100, 0.1);
}

function draw() {
  background(51);
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = ((x+y*width)*4);
      
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      
        if(video.pixels[index+0]<150){
            var r = 255;
        }
        if(video.pixels[index+1]<150){
            var g = 255;
        }
        if(video.pixels[index+2]<150){
            var b = 255;
        }
     
      pixels[index + 0]=r;
      pixels[index + 1]=g;
      pixels[index + 2]=b;
      pixels[index + 3]=255;


      
    }
  }
  updatePixels();

}
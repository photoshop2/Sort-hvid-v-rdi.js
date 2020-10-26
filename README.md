var video;
var slider;



function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
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
      

      if(bright>=slider.value()){
      pixels[index + 0]=255;
      pixels[index + 1]=255;
      pixels[index + 2]=255;
      pixels[index + 3]=255;
      } else{
        pixels[index + 0]=0;
        pixels[index + 1]=0;
        pixels[index + 2]=0;
        pixels[index + 3]=255;
      }

      /*pixels[index + 0]=bright;
      pixels[index + 1]=bright;
      pixels[index + 2]=bright;
      pixels[index + 3]=255;*/


      
    }
  }
  updatePixels();

}

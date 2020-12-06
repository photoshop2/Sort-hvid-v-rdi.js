var video;
var forskel = 15;
var data = [];

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width,height);
  video.hide();
  
}

function draw() {
  data = [];
  cursor(CROSS);
  background(51);
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = ((x + y * width) * 4);
      //To pixels gemmes med deres 3 farver
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var r2 = video.pixels[index + 4];
      var g2 = video.pixels[index + 5];
      var b2 = video.pixels[index + 6];
      var r3 = r-r2;
      var g3 = g-g2;
      var b3 = b-b2;

      if (r3 <= -forskel || r3 >= forskel || g3 <= -forskel || g3 >= forskel || b3 <= -forskel || b3 >= forskel) {
        pixels[index + 0] = 255; //73;
        pixels[index + 1] = 255; //120;
        pixels[index + 2] = 255; //178;
        pixels[index + 3] = 255;
        //Der bliver her printet 1 ind i arrayet, hvis der er en kant på den pixel, den skal derfor være tændt
        data.push("1");
      } else {
        var bright = (r + g + b) / 3;
        pixels[index + 0] = 0;
        pixels[index + 1] = 0;
        pixels[index + 2] = 0;
        pixels[index + 3] = 255;
        //Der bliver her printet 0 ind i arrayet, hvis der ikke er nogen kant på den pixel, den skal derfor være slukket
        data.push("0");
      }
    }
  }

  
  if (mouseIsPressed) {
    saveStrings(data, "Komprimering.kanter");
  }

  
  updatePixels();


}
var data=[];
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
  
  data=[];

  background(51);
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = ((x+y*width)*4);
      
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      
      

      

      pixels[index + 0]=r;
      pixels[index + 1]=g;
      pixels[index + 2]=b;
      pixels[index + 3]=255;

      data.push(r);
      data.push(g);
      data.push(b);
      //data.push(255);

      
    }
  }
  updatePixels();


}





function mousePressed(){
  saveStrings(data, 'data.txt');
}
var video;

//var farve = [255, 207, 204];
var farve = [177, 25, 16];
var interval = 50;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width,height);
  video.hide();
}
function draw() {
  cursor(CROSS);
  background(51);
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = ((x + y * width) * 4);
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];

      //Der bliver her tjekket om den farve som er i denne pixel, er inden for en vide på 50 (interval) fra arrayet farver med sine 3 farver
      if (r <= farve[0] + interval && r >= farve[0] - interval && g <= farve[1] + interval && g >= farve[1] - interval && b <= farve[2] + interval && b >= farve[2] - interval) {
        pixels[index + 0] = r;
        pixels[index + 1] = g;
        pixels[index + 2] = b;
        pixels[index + 3] = 255;
        //print("hej");
      } else {
        //Hvis farven ikke var tæt nok på den valgte farve så bliver gennemsnittet af pixlen fundet og den bliver derfor grå
        var bright = (r + g + b) / 3;
        pixels[index + 0] = bright;
        pixels[index + 1] = bright;
        pixels[index + 2] = bright;
        pixels[index + 3] = 255;
      }
      
    }

  }
  
  //Når musen bliver trykket finder den i arrayet pixlen og derefter farverne den har og indsætter det i arrayet farver,
  //Den er ikke i for loopet da den vil blive tjekket utroligt mange gange som bare sænke vil sænke hastigheden i farvningen af pixels
  if (mouseIsPressed) {
    var index = ((mouseX + mouseY * width) * 4);
    var r = video.pixels[index + 0];
    var g = video.pixels[index + 1];
    var b = video.pixels[index + 2];
    farve[0] = r;
    farve[1] = g;
    farve[2] = b;
  }

  
  updatePixels();


}

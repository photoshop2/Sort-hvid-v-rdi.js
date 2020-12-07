var data = [];
var video;
var cnv;
var vScale = 1;

function setup() {
    cnv = createCanvas(640, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width / vScale, height / vScale);
}

function draw() {

    data = [];

    background(51);
    video.loadPixels();
    for (var y = 0; y < video.height; y += 2) {
        for (var x = 0; x < video.width; x += 2) {
            //Her finder man de forskellige index til de fire pixels som er i en boks (2*2 pixel)
            var index = (video.width - x + -1 + (y * video.width)) * 4;
            var index2 = (video.width - (x + 1) + -1 + (y * video.width)) * 4;
            var index3 = (video.width - (x) + -1 + ((y + 1) * video.width)) * 4;
            var index4 = (video.width - (x + 1) + -1 + ((y + 1) * video.width)) * 4;
            //Her findes gennemsnitet af de forskellige farver for de 4 forskellige pixels
            var rGennemsnit = (video.pixels[index + 0] + video.pixels[index2 + 0] + video.pixels[index3 + 0] + video.pixels[index4 + 0]) / 4;
            var gGennemsnit = (video.pixels[index + 1] + video.pixels[index2 + 1] + video.pixels[index3 + 1] + video.pixels[index4 + 1]) / 4;
            var bGennemsnit = (video.pixels[index + 2] + video.pixels[index2 + 2] + video.pixels[index3 + 2] + video.pixels[index4 + 2]) / 4;


            //skaber en boks med en farve, men når alle bokse skal skabes kan det gå op og lage meget
            noStroke();
            fill(rGennemsnit, gGennemsnit, bGennemsnit);
            rect(x * vScale, y * vScale, vScale*2);

            //Her bliver der på en meget ineficent måde fortalt til de forskellige bokse at de skal have en bestemt farve som er den samme for dem alle sammen
            /*r = 1;
            g = 1;
            b = 1;
            pixels[index + 0] = r;
            pixels[index + 1] = g;
            pixels[index + 2] = b;
            pixels[index + 3] = 255;
            pixels[index2 + 0] = r;
            pixels[index2 + 1] = g;
            pixels[index2 + 2] = b;
            pixels[index2 + 3] = 255;*/
            /*pixels[index3 + 0]=r;
            pixels[index3 + 1]=g;
            pixels[index3 + 2]=b;
            pixels[index3 + 3]=255;
            pixels[index4 + 0]=r;
            pixels[index4 + 1]=g;
            pixels[index4 + 2]=b;
            pixels[index4 + 3]=255;*/

            data.push(rGennemsnit + " " + gGennemsnit + " " + bGennemsnit);
        }
    }
    updatePixels();
}



function mousePressed() {
    /*saveCanvas(cnv, "hej", "jpg");
    saveCanvas(cnv, "hej", "png");
    saveCanvas(cnv, "hej", "jpeg");*/
    saveStrings(data, "Komprimering.gennemsnit");
}

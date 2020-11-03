var capture;
var buttonTakeFoto;
var buttonSaveFoto;
var fotoTake;
var modo = 0;
var confirmTakeSnap = false;
var BWslider;

  //Position til den første
  let buttonOneX = 5;
  let buttonOneY = 490;

function setup() {
 createCanvas(windowWidth, windowHeight);
 pixelDensity(1);
 capture = createCapture(VIDEO);
 capture.hide();
 BWslider=createSlider(0, 500, 500, 0.1);
 startButtons();
}

function draw() {    
  if(modo == 0){ 
    image(capture, width/2 + 0, 0); 
    fotoTake.loadPixels();
    loadPixels();
    for (var y = 0; y < fotoTake.height; y++) {
      for (var x = 0; x < fotoTake.width; x++) {
        var index = ((x+y*width)*4);
        var r = fotoTake.pixels[index + 0];
        var g = fotoTake.pixels[index + 1];
        var b = fotoTake.pixels[index + 2];
        var bright = (r + g + b) / 3;
        
        if(bright>=BWslider.value()){
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
  }
}
    rect(buttonOneX-3,buttonOneY-4,436,30);
  }else if(modo == 1){
    background(255);
    image(fotoTake, 0, 0, width, height);
    saveCanvas("myFoto", "jpg");
    background(255);
    modo = 0;
  }
  background(51);

  updatePixels();
}

function startButtons(){
  //"definerer" objekterne
  let importButton;
  let blurButton;
  let invertColourButton;
  let colourPickerButton;
  let takePhotoButton;
  let savePhotoButton;
  //farve for knapper
  let col = color(200,255,255);
  
  fill(125);
  rect(buttonOneX-3,buttonOneY-4,436,30);
  //Laver knapper, bestemmer farver, sætter position
  //relativt til den første og kalder funktionen efter knappen
  //er trykket
  importButton = createButton('Import');
  importButton.style('background-color', col);
  importButton.position(buttonOneX,buttonOneY);
  importButton.mousePressed(Import);

  blurButton = createButton('Blur');
  blurButton.style('background-color', col);
  blurButton.position(buttonOneX+60,buttonOneY);
  blurButton.mousePressed(Blur);

  invertColourButton = createButton('Invert');
  invertColourButton.style('background-color', col);
  invertColourButton.position(buttonOneX+105,buttonOneY);
  invertColourButton.mousePressed(Invert);

  colourPickerButton = createButton('Colour Picker');
  colourPickerButton.style('background-color', col);
  colourPickerButton.position(buttonOneX+158,buttonOneY);
  colourPickerButton.mousePressed(ColourPick);

  takePhotoButton = createButton('Take Photo');
  takePhotoButton.style('background-color', col);
  takePhotoButton.position(buttonOneX+258,buttonOneY);
  takePhotoButton.mousePressed(takeSnap);

  savePhotoButton = createButton('Save Photo');
  savePhotoButton.style('background-color', col);
  savePhotoButton.position(buttonOneX+345,buttonOneY);
  savePhotoButton.mousePressed(saveSnap);

  //funktionerne hver navngiven knap kalder
  function Import(){
      console.log("yes");
  }
  
  function Blur(){
      console.log("Blur");
  }
  
  function Invert(){
      console.log("Invert");
  }
  
  function ColourPick(){
      console.log("Colour Picker")
  }
  function takeSnap(){
    tint(255);
    image(capture, 0, 0);
    fotoTake = capture.get();
    image(fotoTake, 0, 0);
    
    confirmTakeSnap = true;
   }
   
   function saveSnap(){
     if(confirmTakeSnap){
      modo = 1;
     }
   }
}


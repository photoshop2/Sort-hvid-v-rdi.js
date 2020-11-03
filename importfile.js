var source;
var vid;
var pix;
var but;
var cam;
var showing=[false,false,false];
var fil;
var x=100;
var y=100;


function setup() {
  //sætter programmet op med to knapper. en der kan loade filer og en der kan tage kameraet
  //false værdien betyder at den kun modtager 1 fil som argument

    createCanvas(x, y);
    fil=createFileInput(handleFile,false);
    but=createButton("kamera");
    but.mousePressed(kamera);
    pixelDensity(1);
  }


  //funktonen der bliver kaldt når man har valgt en fil
  function handleFile(file) {

    
    source=null;

    //hvis filen man har valgt er et billede
    if (file.type === 'image') {
      source = createImg(file.data, '');
      source.hide();
      x=source.width;
      y=source.height;
      console.log("det et billede");
    
      createCanvas(x, y);
     
      
      showing=[true,false,false];
      
    
    }
    //hvis filen man har valgt er en video
      else if (file.type === 'video') {
        console.log("det en video");
        vid=createVideo(file.data);
        source=vid;
        vid.hide();
        vid.loop();
        

        createCanvas(vid.width, vid.height);

        showing=[false,false,true];
        
    }
    
     else {
        //hvis filen ikke er et billede
        
      source = null;
      console.log("vælg en fil der ikke er garb");
    }

   
  }

function draw(){
    

    //der er 3 værdier i arryen "showing". værdierne beskriver hvilken filtype der arbejdes med
    //arrayen er lavet af 3 bools. den første står for billede. den anden står for kamera og den tredje står for video
    //[billede,kamera,video]

    background(57);
    
    //tegner billedet
    if(showing[0]){
    x=source.width;
    y=source.height;
    createCanvas(x,y);
    image(source,0,0,width,height);
    
    }

    //tegner kameraet 
    if(showing[1]){
      x=cam.width;
      y=cam.height;
      createCanvas(x,y);
      cam.loadPixels();
      loadPixels();
  for (var y = 0; y < cam.height; y++) {
    for (var x = 0; x < cam.width; x++) {
      var index = ((x+y*width)*4);
      
      var r = cam.pixels[index + 0];
      var g = cam.pixels[index + 1];
      var b = cam.pixels[index + 2];

      pixels[index + 0]=r;
      pixels[index + 1]=g;
      pixels[index + 2]=b;
      pixels[index + 3]=255;
      
    }
  }
  updatePixels();
    }

//tegner video
    if(showing[2]){
      x=vid.width;
      y=vid.height;
      createCanvas(x,y);
      vid.loadPixels();
      loadPixels();
  for (var y = 0; y < vid.height; y++) {
    for (var x = 0; x < vid.width; x++) {
      var index = ((x+y*width)*4);
      
      var r = vid.pixels[index + 0];
      var g = vid.pixels[index + 1];
      var b = vid.pixels[index + 2];

      pixels[index + 0]=r;
      pixels[index + 1]=g;
      pixels[index + 2]=b;
      pixels[index + 3]=255;
    }
  }
  updatePixels();
    }
    


}

//når man trykker på kamera knappen bliver denne finktion kaldet
function kamera(){
  fil.value('');
  vid=null;
  source=null;
  cam=createCapture();
  source=cam;
  cam.hide();
  showing=[false,true,false];

}


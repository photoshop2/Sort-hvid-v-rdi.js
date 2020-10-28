var source;
var vid;
var pix;
var but;
var cam;
var fil;
var x=100;
var y=100;

function setup() {
    createCanvas(x, y);
    fil=createFileInput(handleFile,false);
    
    
    but=createButton("kamera");
    but.mousePressed(kamera);
    pixelDensity(1);
    
    
  }


  function handleFile(file) {
    
    console.log("hejsa: "+cam);
    if(vid!=null){
    vid=null;
    vid.hide();
    
    }
    source=null;
    if(cam!=null){
      cam.hide();
      cam=null;
      console.log("gemmer kameraet");
    }

    print(file);
    if (file.type === 'image') {
      source = createImg(file.data, '');
      source.hide();
      x=source.width;
      y=source.height;
      console.log("det et billede");
    
      createCanvas(x, y);
      image(source,0,0,width,height);
      loadpic();
    
    }
      else if (file.type === 'video') {
        console.log("det en video");
        vid=createVideo(file.data);
        vid.show();
        vid.loop();
        loadvid();

        
        x=0;
        y=0;
    
        createCanvas(x, y);
    }
     else {
        //hvis sourcen ikke er et billede
        console.log("indsæt et billede eller en video din dumrian");
      source = null;
    }
  }

function draw(){
    
    background(57);
    
    if(source!=null){
    image(source,0,0,width,height);
    }




}


function kamera(){
  if(cam==null){
  cam=createCapture();
  }
  if(vid!=null){
  vid.hide();
  vid=null;
  }

  source=null;
  //returner captured her
}


function loadvid(){
    //returnere den video man har valgt som filtype så man kan lave kloge ting
}

function loadpic(){
  //returnere det billede man har valgt
}

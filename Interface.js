let buttonOneX = 8;
let buttonOneY = 100;
let importButton;
let blurButton;
let invertColourButton;

function setup(){
    createCanvas(200,200);
    background(50);
    fill(125);
    rect(buttonOneX-3,buttonOneY-4,160,30);
    importButton = createButton('Import');
    importButton.position(buttonOneX,buttonOneY);
    importButton.mousePressed(Import);
    blurButton = createButton('Blur');
    blurButton.position(buttonOneX+60,buttonOneY);
    blurButton.mousePressed(Blur);
    invertButton = createButton('Invert');
    invertButton.position(buttonOneX+105,buttonOneY);
    invertButton.mousePressed(Invert);
}


function Import(){
    console.log("yes");
}

function Blur(){
    console.log("Blur");
}

function Invert(){
    console.log("Invert");
}
var piirra_sateenkaarta = false;
var kynan_koko = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
  fill('black');
  noStroke()
}

function draw() {
  if(piirra_sateenkaarta){
    arvo_vari();
  }
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, kynan_koko, kynan_koko);
  }


}

function sinista_painettu(){
  piirra_sateenkaarta = false;
  fill("blue");
}

function punaista_painettu(){
  piirra_sateenkaarta = false;
  fill("red");
}

function keltaista_painettu(){
  piirra_sateenkaarta = false;
  fill("yellow");
}

function arvontaa_painettu(){
  piirra_sateenkaarta = false;
  arvo_vari();
}

function sateenkaarta_painettu(){
  piirra_sateenkaarta = true;
}

function kumia_painettu(){
  piirra_sateenkaarta = false;
  fill("black");
}


function arvo_vari(){
  var red = random(0,255);
  var green = random(0,255);
  var blue = random(0,255);

  fill(red, green, blue);
}

function kaikki_valmista(){

  var colorPicker = document.getElementById("varivalitsin");
  colorPicker.addEventListener("change", watchColorPicker, false);

  function watchColorPicker(event) {
    console.log("vari on vaihtunut")
    piirra_sateenkaarta = false;
    var vari = document.getElementById("varivalitsin").value;
    fill(vari);
  }

  var slider = document.getElementById("myRange");
  var output = document.getElementById("kynan_koko");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
    kynan_koko = this.value;
  }


}



function playAudio() {
  var vauvan_nauru = document.getElementById("myAudio");
  vauvan_nauru.play();
}

function pauseAudio() {
  var vauvan_nauru = document.getElementById("myAudio");
  vauvan_nauru.pause();
}


function nayta_kuva() {
  var kuva = document.getElementById("kuvatiedosto").files[0];
  var img = document.getElementById("kuvan_paikka");
  var reader = new FileReader();
  reader.onloadend = function() {
             img.src = reader.result;
        }
        reader.readAsDataURL(kuva);
  console.log(kuva);
  console.log(img);
}

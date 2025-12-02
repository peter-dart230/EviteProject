let a = 50;
let b = 25;
let c = 75;
let n = 100;
let x = 85;
let y = 40;
let z = 62.5;
let speed = 4;



function setup() {
  let script= createCanvas(800, 150);
    script.parent("sketchcont");
}

function draw() {
  background(10,50,80);
  
  fill(500,500,100);
  noStroke();
  triangle(b,50,x,100,c,50);
  triangle(n,50,a,50,y,100);
  triangle(a,50,c,50,z,25);
  
  a = a + speed;
  b = b + speed;
  c = c + speed;
  n = n + speed;
  x = x + speed;
  y = y + speed;
  z = z + speed;
  
  
  if (a > 750) 
    {
      speed = -speed;
    }
  if (a < 50)
    {
      speed = -speed;
    }
  
  
  
  
  
  
}
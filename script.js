let particles = [];
let colors;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(12, 12, 21);

  // Color palette
  colors = [
    color(255, 50, 150, 220), // Pink
    color(50, 255, 200, 220), // Cyan
    color(100, 255, 50, 220), // Neon green
    color(255, 200, 50, 220), // Yellow
    color(200, 50, 255, 220), // Purple
  ];

  noStroke();
}

function draw() {
  // Fade effect background
  fill(6, 6, 14, 30);
  noStroke();
  rect(0, 0, width, height);

  // Create particles on mouse press
  if (mouseIsPressed) {
    let particleCount = mouseButton === LEFT ? 5 : 10;
    for (let i = 0; i < particleCount; i++) {
      if (particles.length < 1000) {
        particles.push(new Particle(mouseX, mouseY, mouseButton === RIGHT));
      }
    }
  }

  // Update and display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y, isRightClick) {
    this.pos = createVector(x, y);

    // Higher speed for right click
    let speed = isRightClick ? 5 : 2;
    this.vel = createVector(random(-speed, speed), random(-speed, speed));
    this.acc = createVector(0, random(-0.15, 0.15));

    this.size = random(10, 60);
    this.sizeSpeed = random(-0.5, 0.5);
    this.lifespan = 255;
    this.color = random(colors);
    this.isSquare = random() > 0.5;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 6;

    // Dynamic size change
    this.size += this.sizeSpeed;
    if (this.size < 5 || this.size > 60) {
      this.sizeSpeed *= -1;
    }
  }

  display() {
    fill(red(this.color), green(this.color), blue(this.color), this.lifespan);
    if (this.isSquare) {
      rect(this.pos.x, this.pos.y, this.size, this.size);
    } else {
      ellipse(this.pos.x, this.pos.y, this.size);
    }
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

function keyPressed() {
  if (key === "c" || key === "C") {
    particles = [];
    background(10, 10, 20);
  }
}

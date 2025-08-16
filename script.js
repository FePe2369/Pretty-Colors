let particles = [];
let colors;

// Configura el lienzo y los colores bien zarpados
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Paleta de colores más loca y brillante
  colors = [
    color(255, 50, 150, 220), // Rosa flashero
    color(50, 255, 200, 220), // Cyan brillante
    color(100, 255, 50, 220), // Verde neón
    color(255, 200, 50, 220), // Amarillo explosivo
    color(200, 50, 255, 220), // Púrpura galáctico
  ];
  noStroke(); // Sin bordes xd
}

// Dibuja todo en cada frame
function draw() {
  // Fondo oscuro con efecto de desvanecimiento suave
  background(10, 10, 20, 30);

  // Si apretás el mouse, soltamos partículas como locos
  if (mouseIsPressed) {
    let particleCount = mouseButton === LEFT ? 10 : 20; // Más partículas con click derecho
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(mouseX, mouseY, mouseButton === RIGHT));
    }
  }

  // Actualizamos y mostramos las partículas, eliminando las que ya ripearon
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isDead()) {
      particles.splice(i, 1); // Chau partícula muerta
    }
  }
}

// Clase para las partículas
class Particle {
  constructor(x, y, isRightClick) {
    this.pos = createVector(x, y);
    // Velocidad más loca si es click derecho
    let speed = isRightClick ? random(-5, 5) : random(-2, 2);
    this.vel = createVector(speed, speed);
    this.acc = createVector(0, random(-0.15, 0.15)); // Aceleración random para más caos
    this.size = random(10, 60); // Tamaño variado
    this.sizeSpeed = random(-0.5, 0.5); // Cambio de tamaño dinámico
    this.lifespan = 255; // Vida inicial
    this.color = random(colors); // Color random de la paleta
    this.isSquare = random() > 0.5; // ¿Círculo o cuadrado? ¡Sorpresa!
  }

  // Actualiza la posición, velocidad y tamaño
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 3; // Se desvanece más rápido para más acción
    this.size += this.sizeSpeed; // Cambia el tamaño dinámicamente
    if (this.size < 5 || this.size > 60) {
      this.sizeSpeed *= -1; // Rebota el cambio de tamaño
    }
  }

  // Dibuja la partícula con su forma y color
  display() {
    fill(red(this.color), green(this.color), blue(this.color), this.lifespan);
    if (this.isSquare) {
      rect(this.pos.x, this.pos.y, this.size, this.size); // Cuadrado pa' variar
    } else {
      ellipse(this.pos.x, this.pos.y, this.size); // Círculo clásico
    }
  }

  // Chequea si la partícula ya fue
  isDead() {
    return this.lifespan <= 0;
  }
}

// Limpia todo si apretás la tecla 'c'
function keyPressed() {
  if (key === 'c' || key === 'C') {
    particles = []; // Borra todas las partículas
    background(10, 10, 20); // Resetea el fondo
  }
}
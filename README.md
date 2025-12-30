# Pretty Colors

An interactive particle system built with p5.js that creates colorful, dynamic animations based on mouse interactions.

## Features

- **Interactive particle generation**: Click and drag to create particles
- **Two click modes**:
  - Left click: Slower particles (5 per frame)
  - Right click: Faster particles (10 per frame)
- **Dynamic particles**: Each particle has random size, color, velocity, and shape (circle or square)
- **Smooth fade effect**: Particles fade out gradually with a trailing effect
- **Performance optimized**: Limited to 1000 particles to maintain smooth animation
- **Clear canvas**: Press 'C' to reset the canvas

## Demo

Simply open `index.html` in your browser and start clicking!

## Installation

1. Download or clone this repository
2. Download [p5.js](https://p5js.org/download/) and place it in the same directory as `index.html`
3. Open `index.html` in your web browser

## Usage

- **Click and hold** the left mouse button to create slower particles
- **Click and hold** the right mouse button to create faster particles
- **Press 'C'** to clear all particles from the screen

## Technologies

- [p5.js](https://p5js.org/) - Creative coding library
- [Bootstrap 5](https://getbootstrap.com/) - CSS framework for styling
- HTML5 Canvas

## Color Palette

The project uses a vibrant neon color palette:

- Pink (#FF3296)
- Cyan (#32FFC8)
- Neon Green (#64FF32)
- Yellow (#FFC832)
- Purple (#C832FF)

## Performance

The application limits the total number of particles to 1000 to ensure smooth performance. Particles automatically fade and are removed from memory when their lifespan reaches zero.

## Author

Felipe Pereira

## License

Free to use and modify.

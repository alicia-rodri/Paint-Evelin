/*
// Selecciona los elementos de la animación
const circle = document.querySelector('.circle');
const triangle = document.querySelector('.triangle');
const square = document.querySelector('.square');

// Crea un temporizador para animar las formas
setTimeout(() => {
  // Añade una clase a la forma del círculo para iniciar la animación de rotación
  circle.classList.add('animate');

  // Añade una clase a la forma del triángulo para iniciar la animación de desvanecimiento y movimiento hacia la derecha
  triangle.classList.add('animate');

  // Añade una clase a la forma del cuadrado para iniciar la animación de movimiento hacia la izquierda
  square.classList.add('animate');
}, 500);
*/


// Constantes
const SHAPES_AMOUNT = 36;
const SHAPE_SIZE = 20;

// Seleccionar el contenedor y calcular su tamaño
const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

// Función para crear formas
function createShape(type) {
  // Crear la forma
  const shape = document.createElement("div");
  shape.classList.add("shape", type);

  // Posicionar aleatoriamente la forma en la pantalla
  const x = Math.random() * (containerWidth - SHAPE_SIZE -5);
  const y = Math.random() * (containerHeight - SHAPE_SIZE);
  shape.style.top = `${y}px`;
  shape.style.left = `${x}px`;

  // Añadir la forma al contenedor
  container.appendChild(shape);
}

// Crear las formas
for (let i = 0; i < SHAPES_AMOUNT; i++) {
  createShape("circle");
  createShape("square");
  createShape("triangle");
}

/*
// crear formas
function createShapes() {
  for (var i = 0; i < 65; i++) {
    var shape = document.createElement("div");
    shape.classList.add("shape");
    var type = Math.floor(Math.random() * 3);
    if (type === 0) {
      shape.classList.add("circle");
    } else if (type === 1) {
      shape.classList.add("square");
    } else {
      shape.classList.add("triangle");
    }
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    shape.style.top = y + "px";
    shape.style.left = x + "px";
    document.body.appendChild(shape);
  }
}

createShapes();
*/
//Shape.js

class Shape {
  constructor(x, y, size, color, shapeMatrix, value) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.shapeMatrix = shapeMatrix;
    this.width = shapeMatrix[0].length * size;
    this.height = shapeMatrix.length * size;
    this.value = value;
  }

// Getter for x
  get x() {
    return this._x;
  }

  // Setter for x
  set x(newX) {
    this._x = newX;
  }

  // Getter for y
  get y() {
    return this._y;
  }

  // Setter for y
  set y(newY) {
    this._y = newY;
  }

  // Getter for value
  get value() {
    return this._value;
  }

  // Setter for value
  set value(newValue) {
    this._value = newValue;
  }
  
  contains(px, py) {
    return (
      px >= this.x &&
      px <= this.x + this.width &&
      py >= this.y &&
      py <= this.y + this.height
    );
  }

  display() {
    for (let i = 0; i < this.shapeMatrix.length; i++) {
      for (let j = 0; j < this.shapeMatrix[i].length; j++) {
        if (this.shapeMatrix[i][j] === 1) {
          fill(this.color); // Use the specified color
          rect(
            this.x + j * this.size,
            this.y + i * this.size,
            this.size,
            this.size
          );
        }
      }
    }
      }
}

class Block extends Shape {
  
}
  
class Tetromino extends Shape {
  
}

 class TetrominoGrid extends Shape {
  
}

class TetrominosLevel3 extends Shape{
  
}
    

function generateBlocks() {
  
  let blockShapes = [
  {
      x: 140,
      y: 100,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
    
    {
      x: 190,
      y: 100,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 0], [0, 0, 0]],
      value: 2,
    },
    {
      x: 270,
      y: 100,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 1], [0, 0, 0]],
      value: 3,
    },
    {
      x: 390,
      y: 100,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 1, 1], [0, 0, 0, 0]],
      value: 4,
    },
    ];
  
     for (let shape of blockShapes) {
    blocks.push(
      new Block(
        shape.x,
        shape.y,
        shape.size,
        shape.color,
        shape.shapeMatrix, shape.value
      )
    );
  }
}

function generateTetrominos() {
 // let tetrominos = [];
  let tetrominoShapes = [
    {
      x: 130,
      y: 100,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 1], [0, 0, 1]],
       value: 4,
    },
    {
      x: 240,
      y: 100,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 1], [0, 1, 0]],
      value: 4,
    },
    {
      x: 350,
      y: 100,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[0, 1, 1], [1, 1, 0]],
      value: 4,
    },
    {
      x: 460,
      y: 100,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 0], [1, 1, 0]],
      value: 4,
    },
    {
      x: 140,
      y: 50,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
    
    {
      x: 190,
      y: 50,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 0], [0, 0, 0]],
      value: 2,
    },
    {
      x: 270,
      y: 50,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 1], [0, 0, 0]],
      value: 3,
    },
    {
      x: 380,
      y: 50,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 1, 1], [0, 0, 0, 0]],
      value: 4,
    },
  ];
  
  for (let shape of tetrominoShapes) {
    tetrominos.push(
      new Tetromino(
        shape.x,
        shape.y,
        shape.size,
        shape.color,
        shape.shapeMatrix, shape.value
      )
    );
  }
  generateTetrominosGrid();
}

 
 function generateTetrominosGrid() {
   let tetrominoShapesGrid = [
    {
      x: 115,
      y: 341,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 1], [0, 0, 1]],
       value: 4,
    },
    {
      x: 235,
      y: 341,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 1], [0, 1, 0]],
      value: 4,
    },
    {
      x: 355,
      y: 341,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[0, 1, 1], [1, 1, 0]],
      value: 4,
    },
    {
      x: 475,
      y: 341,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 0], [1, 1, 0]],
      value: 4,
    },
    {
      x: 145,
      y: 431,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
    
    {
      x: 205,
      y: 431,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 0], [0, 0, 0]],
      value: 2,
    },
    {
      x: 295,
      y: 431,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 1], [0, 0, 0]],
      value: 3,
    },
    {
      x: 415,
      y: 431,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 1, 1, 1], [0, 0, 0, 0]],
      value: 4,
    },
  ];
 
  let numRandomShapes = 3;

/*function generateRandom3DigitNumber() {
  
  const min = 150;
  const max = 200;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}*/


for (let i = 0; i < numRandomShapes; i++) {
  // Choose a random index from the array
  let randomIndex = floor(random(tetrominoShapesGrid.length));

  // Get the shape object at the random index
  let selectedShape = tetrominoShapesGrid[randomIndex];
 //  let x = generateRandom3DigitNumber();
 //  let y = generateRandom3DigitNumber()
   // Create a Tetromino object using the selected shape
  tetrominosGrid.push(new Tetromino(
    selectedShape.x,
    selectedShape.y,
    selectedShape.size,
    selectedShape.color,
    selectedShape.shapeMatrix,
    selectedShape.value
  ));
  }
}
   function generateTetrominosLevel3() {
   let tetrominoShapesLevel3 = [
    {
      x: 115,
      y: 341,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
       value: 1,
    },
    {
      x: 115,
      y: 281,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
       value: 1,
    },
    {
      x: 235,
      y: 281,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
       value: 1,
    },
    {
      x: 235,
      y: 281,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
     {
      x: 355,
      y: 281,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
     {
      x: 475,
      y: 281,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
    {
      x: 355,
      y: 341,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
    {
      x: 475,
      y: 341,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
     {
      x: 145,
      y: 281,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
    {
      x: 145,
      y: 431,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
    {
      x: 205,
      y: 281,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
    {
      x: 205,
      y: 431,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
    {
      x: 295,
      y: 431,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
    {
      x: 415,
      y: 431,
      size: 30,
      color: '#FF208F',
      shapeMatrix: [[1, 0, 0], [0, 0, 0]],
      value: 1,
    },
  ];
 
  let numRandomShapes = 10;

for (let i = 0; i < numRandomShapes; i++) {
  // Choose a random index from the array
  let randomIndex = floor(random(tetrominoShapesLevel3.length));

  // Get the shape object at the random index
   let selectedShape = tetrominoShapesLevel3[randomIndex];

   // Create a Tetromino object using the selected shape
     tetrominosLevel3.push(new Tetromino(
    selectedShape.x,
    selectedShape.y,
    selectedShape.size,
    selectedShape.color,
    selectedShape.shapeMatrix,
    selectedShape.value
  ));
  }
}
   

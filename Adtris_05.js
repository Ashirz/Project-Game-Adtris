// Game.js

let blocks = [];
let tetrominos = [];
let tetrominosGrid = [];
let tetrominosLevel3 = [];
let targetNumber = 0;
let score = 0;
let level = 1;
let placedBlock = null;
let placedTetro = null;
let levelCompleted = false;
let timerStartTime = 0;
let instructionsScreen;
let blockPlacementSound;
let backgroundSound;
let alertSound;
let levelSound;
let startButton;
let levelSelection;
let level1Button;
let level2Button;
let level3Button;
let selectedLevel = null;
let exitButton;



function setup() {

  createCanvas(650, 550);
  background(255, 230, 230);
  newLevel();
  levelSelection = select('#level-selection');
  level1Button = select('#level1-btn');
  level2Button = select('#level2-btn');
  level3Button = select('#level3-btn');
  instructionsScreen = select('#instructions-screen');
  startButton = select('#start-btn');
  setupLevelSelection();
  setupInstructionsScreen();

  // Initialize the exit button element
  exitButton = select('#exit-button');
  exitButton.mousePressed(exitLevel);
}
function preload() {
  // Load sound files in the preload function
  blockPlacementSound = loadSound('block_placement.mp3');
  alertSound = loadSound('Alert.mp3');
  backgroundSound = loadSound('Background.mp3');
  levelSound = loadSound('Level.mp3');
}

function exitLevel() {
   backgroundSound.stop();
  levelSelection.show();
 }

//refactored code to set up buttons for each level
function setupLevelButton(button, level, targetRange) {
  button.mousePressed(() => {
    levelSound.play();
    selectedLevel = level;
    levelSelection.hide();
    instructionsScreen.show();
    setupInstructionsScreen();
   targetNumber = Math.floor(random(targetRange[0], targetRange[1]));

    // Add level-specific logic
    if (selectedLevel === 1) {
       blocks = [];
      generateBlocks(); // Execute level 1 specific logic
      currentSum = 0;
    } else if (selectedLevel === 2) {
      tetrominos = [];
      tetrominosGrid = [];
      generateTetrominos();
      currentSum = calculateCurrentSum();
      timerStartTime = millis();
    } else if (selectedLevel === 3) {
      tetrominosLevel3 = [];
      generateTetrominosLevel3();
      currentSum = calculateCurrentSum();
      timerStartTime = millis();
    }
  });
}

function setupLevelSelection() {
  setupLevelButton(level1Button, 1, [11, 40]);
  setupLevelButton(level2Button, 2, [15, 40]);
  setupLevelButton(level3Button, 3, [1, 10]);
}

//before refactoring
/*function setupLevelSelection() {
  level1Button.mousePressed(() => {
    levelSound.play();
    selectedLevel = 1; 
    
    levelSelection.hide();
    instructionsScreen.show();
    setupInstructionsScreen();
    blocks = [];
    currentSum = 0;
    targetNumber = Math.floor(random(11, 40)); // Set target number for level 1
        // Other level-specific properties/settings
    generateBlocks();
  }
  );

  level2Button.mousePressed(() => {
    levelSound.play();
    selectedLevel = 2; 
    levelSelection.hide();
    instructionsScreen.show();
    setupInstructionsScreen();
     tetrominos = [];
    tetrominosGrid = [];
    generateTetrominos();  
    currentSum = calculateCurrentSum();
    targetNumber = Math.floor(random(15, 40)); // Set target number for level 2
     timerStartTime = millis(); // Reset the timer start time
        
  }
  );
  
  level3Button.mousePressed(() => {
    levelSound.play();
    selectedLevel = 3; 
    levelSelection.hide();
    instructionsScreen.show();
    setupInstructionsScreen();
    tetrominosLevel3 = [];
   generateTetrominosLevel3(); 
   currentSum = calculateCurrentSum();
    targetNumber = Math.floor(random(1, 10)); // Set target number for level 3
    timerStartTime = millis(); // Reset the timer start time
          
  }
  );
  }*/

function setupInstructionsScreen() {
  startButton.mousePressed(() => {
   backgroundSound.play();
    instructionsScreen.hide();
  }
  );
}

function draw() {
  background(220);
   
  // Display game components based on the selected level
  if (selectedLevel === 1) {
     
    // Execute level 1 logic
    setupLevelSelection(); // Call a function that contains level 1 logic
    displayBlocks();
  } else if (selectedLevel === 2) {
      displayTetros();
    // Execute level 2 logic
    setupLevelSelection(); // Call a function that contains level 2 logic
    
  } else if (selectedLevel === 3) {
    
    // Execute level 3 logic
    setupLevelSelection(); // Call a function that contains level 3 logic
    //displayTetros_Grid();
     displayTetrosLevel3();
   
  }
  
  displayGrid();
  displayUI();
}

function mousePressed() {
  if (selectedLevel ===1){

  // Handle mousePressed logic for blocks
  for (let block of blocks) {
    if (block.contains(mouseX, mouseY)) {
      let blockCopy = new Block(block.x, block.y, block.size, block.color, block.shapeMatrix, block.value);
      blockCopy.dragging = true;
      blocks.push(blockCopy);
      break;
    }
  }
  }
  
    if (selectedLevel ===2){
  // Handle mousePressed logic for tetrominos
 for (let tetromino of tetrominos) {
    if (tetromino.contains(mouseX, mouseY)) {
      let tetrominoCopy = new Tetromino(
        tetromino.x,
        tetromino.y,
        tetromino.size,
        tetromino.color,
        tetromino.shapeMatrix,
        tetromino.value
        );
      tetrominoCopy.dragging = true;
      tetrominos.push(tetrominoCopy);
      break;
    }
  }
  
 for (let tetromino of tetrominosGrid) {
      tetromino.dragging = false;
      break; // Exit the loop after marking the Tetromino as dragging
    
  }
  }

    if (selectedLevel ===3){
   
     console.log(currentSum);
  // Handle mousePressed logic for tetrominos_Grid
  if (currentSum >=targetNumber) {
  for (let tetromino of tetrominosLevel3) {
     
    if (tetromino.contains(mouseX, mouseY)) {
       tetromino.color = '#33FF5E';
       currentSum -= tetromino.value;
        console.log(currentSum);
       checkWinCondition();
     
      
    }
  }
  }
    }
}
function mouseDragged() {
  
  if (selectedLevel ===1){
  // Handle mouseDragged logic for blocks
  for (let block of blocks) {
    if (block.dragging) {
      block.x = mouseX;
      block.y = mouseY;
    }
  }
  }
  
  if (selectedLevel ===2){
  // Handle mouseDragged logic for tetrominos
  for (let tetromino of tetrominos) {
    if (tetromino.dragging) {
      tetromino.x = mouseX;
      tetromino.y = mouseY;
    }
  }
  }
       
  if (selectedLevel ===3){
    }
}
 //refactored code by simplifying and reduce repetition
function handleMouseReleased(objectArray) {
  let placedObject = null;

  for (let obj of objectArray) {
    if (obj.dragging) {
      obj.dragging = false;
      placedObject = obj;
      break;
    }
  }

  if (placedObject !== null) {
    blockPlacementSound.play();
    if (currentSum + placedObject.value <= targetNumber) {
      placedObject.placedOnGrid = true;
      currentSum += placedObject.value;
      console.log(currentSum);
      checkWinCondition();
    } else {
      alert("Target exceeded, Try again!");
      newLevel();
    }
  }
}

function mouseReleased() {
  if (selectedLevel === 1) {
    handleMouseReleased(blocks);
  } else if (selectedLevel === 2) {
    handleMouseReleased(tetrominos);
  }
}




 //refactored mouse Released by seperating logic for blocks and Tetrominos
/*function mouseReleased() {
  if (selectedLevel === 1) {
    handleMouseReleasedForBlocks();
  } else if (selectedLevel === 2) {
    handleMouseReleasedForTetrominos();
  }
}

function handleMouseReleasedForBlocks() {
  let placedBlock = null;

  for (let block of blocks) {
    if (block.dragging) {
      block.dragging = false;
      placedBlock = block;
      break;
    }
  }

  if (placedBlock !== null) {
    blockPlacementSound.play();
    if (currentSum + placedBlock.value <= targetNumber) {
      placedBlock.placedOnGrid = true;
      currentSum += placedBlock.value;
      console.log(currentSum);
      checkWinCondition();
    } else {
      alert("Target exceeded, Try again!");
      newLevel();
    }
  }
}

function handleMouseReleasedForTetrominos() {
  let placedTetro = null;

  for (let tetromino of tetrominos) {
    if (tetromino.dragging) {
      tetromino.dragging = false;
      placedTetro = tetromino;
      break;
    }
  }

  if (placedTetro !== null) {
    if (currentSum + placedTetro.value <= targetNumber) {
      currentSum += placedTetro.value;
      console.log(currentSum);
      checkWinCondition();
    } else {
      alert("Target exceeded, Try again!");
      newLevel();
    }
  }
}*/

//before refactoring
/*function mouseReleased() {
  
  if (selectedLevel ===1){
  
  // Handle mouseReleased logic for Blocks
  let placedBlock = null;

  for (let block of blocks) {
    if (block.dragging) {
      block.dragging = false;
      placedBlock = block;
      break;
    }
  }
  
  if (placedBlock !== null) {
    blockPlacementSound.play();
    if (currentSum + placedBlock.value <= targetNumber) {
        placedBlock.placedOnGrid = true;
        currentSum += placedBlock.value;
        console.log(currentSum);
        checkWinCondition();
      }
      else {
      alert("Target exceeded, Try again!"); // Alert the player if the sum exceeds the target
      newLevel(); // Start a new level after the alert
    }
    } 
  }
  
  if (selectedLevel ===2){
      
    // Handle mouseReleased logic for Tetrominos
  let placedTetro = null;
   for (let tetromino of tetrominos) {
    if (tetromino.dragging) {
      tetromino.dragging = false;
      placedTetro = tetromino;
    }
  }
       if (placedTetro!== null) {
     
      // Implement logic to check if the Tetromino can be placed within the grid boundaries
      if (currentSum + placedTetro.value <= targetNumber) {
        currentSum += placedTetro.value;
        console.log(currentSum);
        checkWinCondition(); // You may want to modify this function to handle Tetrominos
      
    } else {
      alert("Target exceeded, Try again!"); // Alert the player if the sum exceeds the target
      newLevel(); // Start a new level after the alert
    }
  }
    }
   
  
}*/

function calculateCurrentSum() {
  if (selectedLevel ==2){
   let currentSumGrid = 0;
   console.log(tetrominosGrid);
  for (let tetromino of tetrominosGrid) {
    console.log('hi');
    currentSumGrid+= tetromino.value;
    console.log(currentSumGrid);
  }
  return currentSumGrid; // Return the calculated sum
}

if (selectedLevel ===3){
  currentSum = 0;
  for (let tetromino of tetrominosLevel3){
    currentSum += tetromino.value;
        
  }
  return currentSum;
 }
}

  function checkWinCondition() {
    if (currentSum === targetNumber) {
    score++;
    level++;
    levelCompleted = true; // Set levelCompleted to true
    alertSound.play();
    alert("Congrats, Target Achieved!"); // Feedback message
    newLevel();
  } 
  }
    
 function displayUI() {
  // Display UI logic
  textSize(16);
  textAlign(LEFT, CENTER);
  fill(0);
  text(`ADTRIS`, 50, 160);
text(`Level : ${selectedLevel}`, 550, 160);
if (selectedLevel ===1) {
text(`Target: ${targetNumber}`, 550, 200);
text(`Score: ${score}`, 550, 280);
text(`Remains: ${targetNumber-currentSum}`, 550, 240);

}
if (selectedLevel ===2) {
text(`Target: ${targetNumber}`, 550, 200);
text(`Score: ${score}`, 550, 280);
text(`Sum: ${currentSum}`, 550, 240);
 if (!levelCompleted) {
      let elapsedTime = millis() - timerStartTime;
      text(`Timer: ${round(elapsedTime / 1000)}`, 550, 310);
    }
}

 if (selectedLevel ===3){
   text(`Target: ${targetNumber}`, 550, 200);
text(`Score: ${score}`, 550, 280);
  text(`Difference: ${currentSum}`, 550, 240);
   if (!levelCompleted) {
      let elapsedTime = millis() - timerStartTime;
      text(`Timer: ${round(elapsedTime / 1000)}`, 550, 310);
    }
  
 }
}

function displayGrid() {
  // Display grid logic
  let cellSize = 30;
  let gridWidth = 420; // Total width of the grid (30*14)
  let gridHeight = 300; // Total height of the grid (30*10)

  // Calculate the starting positions to center-align the grid
  let startX = (width - gridWidth) / 2;
  let startY = 190;

  for (let x = startX; x < startX + gridWidth; x += cellSize) {
    for (let y = startY; y < startY + gridHeight; y += cellSize) {
      stroke(0);
      noFill();
      rect(x, y, cellSize, cellSize);
    }
  }
}

function newLevel() {
  currentSum = 0;
}
  
  function displayBlocks() {
  for (let block of blocks) {
    block.display();
  }
}

function displayTetros() {
  for (let tetromino of tetrominos) {
    tetromino.display();
  }
  for (let tetromino of tetrominosGrid) {
       tetromino.display();
      }
}


/*function displayTetrosGrid() {
  for (let tetromino of tetrominosGrid) {
    tetromino.display();
    console.log (tetromino.value);
  }
}*/

function displayTetrosLevel3(){
  for (let tetromino of tetrominosLevel3) {
    tetromino.display();
    console.log (tetromino.value);
  }
}

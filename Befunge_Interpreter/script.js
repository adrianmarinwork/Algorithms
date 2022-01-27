class tools{
  constructor(){
    this.befungeArray;
    this.stack = [];
    this.output = '';
    this.direction = 'right';
    this.i = 0;
    this.j = 0;
    this.stringMode = false;
  }
}

function interpret(code) {
  let tool = new tools();
  
  tool.befungeArray = createArrayBefunge(code);
  
  let directions = {
    '>': 'right',
    'v': 'down',
    '<': 'left',
    '^': 'up'
  }
  
  let actions = {
    '+': addition,
    '-': subtraction,
    '*': multiplication,
    '/': integerDivision,
    '%': modulo,
    '!': logicalNot,
    '`': greaterThan,
    '?': moveRandom,
    '_': swapDirectionHorizontal,
    '|': swapDirectionVerticaly,
    '"': startStringMode,
    ':': duplicateTopStack,
    '\\': swapValuesTopStack,
    '$': popAndDiscard,
    '.': outputAsInteger,
    ',': popAsciiValue,
    '#': trampoline,
    'p': put,
    'g': get
  }
  
  while(tool.befungeArray[tool.i][tool.j] !== '@'){
    
    if(directions[tool.befungeArray[tool.i][tool.j]] != undefined){
      tool.direction = directions[tool.befungeArray[tool.i][tool.j]];
    }
    else{
      
      if(/\d/g.test(tool.befungeArray[tool.i][tool.j])){
        tool.stack.push(tool.befungeArray[tool.i][tool.j]);
      }
      else if(tool.befungeArray[tool.i][tool.j] != ' ' || tool.stringMode){
        if(tool.stringMode && tool.befungeArray[tool.i][tool.j] != '"'){
          tool.stack.push(tool.befungeArray[tool.i][tool.j].charCodeAt(0));
        }
        else{
          actions[tool.befungeArray[tool.i][tool.j]](tool);
        }
      }
    }
    
    sumInDirection(tool);
  }
  
  return tool.output;
}

function createArrayBefunge(code) {
  
  let befungeArray = [], indexOfJump;
  
  do{
    
    indexOfJump = code.indexOf('\n');
    befungeArray.push(code.substring(0, (indexOfJump === -1) ? code.length : indexOfJump).split(''));
    code = code.substring((indexOfJump === -1) ? code.length : indexOfJump + 1);
    
  }while(code.length > 0);
  
  return befungeArray;
  
}

function sumInDirection(tool) {
  switch(tool.direction){
      case 'right':
        tool.j++;
        break;
      case 'down':
        tool.i++;
        break;
      case 'left':
        tool.j--;
        break;
      case 'up':
        tool.i--;
        break;
    }
}

function getTopTwoValues(tool) {
  return [parseInt(tool.stack.pop()), parseInt(tool.stack.pop())]
}

function addition(tool) {
  let topTwoValues = getTopTwoValues(tool);
  tool.stack.push(topTwoValues[0] + topTwoValues[1]);
}

function subtraction(tool) {
  let topTwoValues = getTopTwoValues(tool);
  tool.stack.push(topTwoValues[1] - topTwoValues[0]);
}

function multiplication(tool) {
  let topTwoValues = getTopTwoValues(tool);
  tool.stack.push(topTwoValues[0] * topTwoValues[1]);
}

function integerDivision(tool) {
  let topTwoValues = getTopTwoValues(tool);
  tool.stack.push( (topTwoValues[0] === 0) ? 0 : Math.floor(topTwoValues[1]/topTwoValues[0]));
}

function modulo(tool) {
  let topTwoValues = getTopTwoValues(tool);
  tool.stack.push( (topTwoValues[0] === 0) ? 0 : topTwoValues[1] % topTwoValues[0]);
}

function logicalNot(tool) {
  tool.stack.push( (tool.stack.pop() === 0) ? 1 : 0 );
}

function greaterThan(tool) {
  let topTwoValues = getTopTwoValues(tool);
  tool.stack.push( (topTwoValues[1] > topTwoValues[0]) ? 1 : 0);
}

function moveRandom(tool) {
  let directions = ['right', 'down', 'left', 'up'];
  tool.direction = directions[Math.floor(Math.random() * 4)];
}

function swapDirectionHorizontal(tool) {
  let pop = tool.stack.pop();
  tool.direction = (pop != 0) ? 'left' : 'right';
}

function swapDirectionVerticaly(tool) {
  let pop = tool.stack.pop();
  tool.direction = (pop != 0) ? 'up' : 'down';
}

function startStringMode(tool) {
  tool.stringMode = (tool.stringMode) ? false : true;
}

function duplicateTopStack(tool) {
  if(tool.stack.length === 0){
    tool.stack.push(0);
  }
  else{
    tool.stack.push(tool.stack[tool.stack.length - 1]);
  }
}

function swapValuesTopStack(tool) {
  let topTwoValues = getTopTwoValues(tool);
  tool.stack.push(topTwoValues[0]);
  tool.stack.push( (isNaN(topTwoValues[1])) ? 0 : topTwoValues[1]);
}

function popAndDiscard(tool) {
  tool.stack.pop();
}

function outputAsInteger(tool) {
  tool.output += parseInt(tool.stack.pop());
}

function popAsciiValue(tool) {
  tool.output += String.fromCharCode(tool.stack.pop());
  console.log(tool.output);
}

function trampoline(tool) {
  sumInDirection(tool);
}

function put(tool) {
  let topTwoValues = getTopTwoValues(tool);
  let thirdValue = tool.stack.pop();
  tool.befungeArray[topTwoValues[0]][topTwoValues[1]] = String.fromCharCode(thirdValue);
}

function get(tool) {
  let topTwoValues = getTopTwoValues(tool);
  tool.stack.push(tool.befungeArray[topTwoValues[0]][topTwoValues[1]].charCodeAt(0));
}

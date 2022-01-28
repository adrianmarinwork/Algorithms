class Tools{
  constructor(){
    this.stack = [0];
    this.output = '';
    this.i = 0;
    this.previousCommand;
    this.skipIf0 = false;
  }
}

function interpreter(tape) {
  
  tape = tape.split('').filter(ele => ele !== '\n')
  let tools = new Tools();
  
  let commands = {
    '^': pop,
    '!': addElement0,
    '+': incrementElement,
    '-': decrementElement,
    '*': addAsciiValueTopStack,
    '[': skipIf0,
    ']': jumpBackIfNot0
  }
  
  while(tools.i < tape.length){
    
    if(commands[tape[tools.i]] != undefined && !tools.skipIf0){
      commands[tape[tools.i]](tools);
    }
    else if(tape[tools.i] === ']'){
      commands[tape[tools.i]](tools);
    }
    
    tools.i++;
  }
  
  return tools.output;
}

function pop(tools){
  tools.stack.pop();
  if(tools.stack.length === 0){
    throw new Error('Stack empty');
  }
}

function addElement0(tools){
  tools.stack.push(0);
}

function incrementElement(tools){
  if(tools.stack[tools.stack.length - 1] + 1 === 256){
    tools.stack[tools.stack.length - 1] = 0;
  }
  else{
    tools.stack[tools.stack.length - 1]++;
  }
}

function decrementElement(tools){
  if(tools.stack[tools.stack.length - 1] - 1 === -1){
    tools.stack[tools.stack.length - 1] = 255;
  }
  else{
    tools.stack[tools.stack.length - 1]--;
  }
}

function addAsciiValueTopStack(tools){
  let topStack = tools.stack.pop();
  tools.output += String.fromCharCode(topStack);
}

function skipIf0(tools){
  if(tools.stack[tools.stack.length - 1] === 0){
    tools.skipIf0 = true;
  }
  tools.previousCommand = tools.i;
}

function jumpBackIfNot0(tools){
  if(tools.stack[tools.stack.length - 1] !== 0){
    tools.i = tools.previousCommand;
  }
  tools.skipIf0 = false;
}

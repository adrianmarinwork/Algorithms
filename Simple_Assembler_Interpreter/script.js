function simple_assembler(program) {

  program = program.map(x => x.split(' '));
  
  let commands = {
    'mov': mov,
    'inc': increment,
    'dec': decrement,
    'jnz': jumpToInstruction
  }
  
  let map = {};
  let i = 0;
  
  while(i < program.length){
    i = commands[program[i][0]](map, program[i], i);
    i++;
  }  
  
  return map;
}

function mov(map, setOfContent, i){
  map[setOfContent[1]] = (map[setOfContent[2]] != undefined) ? map[setOfContent[2]] : parseInt(setOfContent[2]);
  return i;
}

function increment(map, setOfContent, i){
  map[setOfContent[1]]++;
  return i;
}

function decrement(map, setOfContent, i){
  map[setOfContent[1]]--;
  return i;
}

function jumpToInstruction(map, setOfContent, i){
  if(map[setOfContent[1]] != 0){
    if(setOfContent[2] > 0){
      i += parseInt(setOfContent[2]) - 1;
    }
    else if(setOfContent[2] < 0){
      i += parseInt(setOfContent[2]) - 1;
    }
  }
  return i;
}

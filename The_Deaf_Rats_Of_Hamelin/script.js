var countDeafRats = function(town) {
  
  if(town === null){
    return 0;
  }
  
  console.log(town);
  
  if(town[0] === 'P'){
    town = town.replace(/ |P/g,'').match(/.{1,2}/g);
    return countRats(town, '~O')
  }
  else if(town[town.length - 1] === 'P'){
    town = town.replace(/ |P/g,'').match(/.{1,2}/g);
    return countRats(town, 'O~');
  }
  else{
    town = town.replace(/ /g,'');
    var arrRats = town.split('P');
    var sum = countRats(arrRats[0].match(/.{1,2}/g), 'O~');
    sum += countRats(arrRats[1].match(/.{1,2}/g), '~O');
    console.log(sum);
    return sum;
  }
  
  function countRats(town, rat){
  
    if(town === null){
      return 0;
    }
    
    console.log(town);
    
    var times = 0;
    for(var i = 0; i<town.length; i++){
      town[i] === rat ? times++ : times += 0;
    }
    return times;
  }
}

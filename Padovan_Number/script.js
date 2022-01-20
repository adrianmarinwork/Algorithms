let cachePadovans = {0: 1, 1: 1, 2: 1}

function padovan(n) {
  if(cachePadovans[n] !== undefined){
    return cachePadovans[n];
  }
  else{
    cachePadovans[n] = padovan(n-2) + padovan(n-3);
    return cachePadovans[n];
  }
}

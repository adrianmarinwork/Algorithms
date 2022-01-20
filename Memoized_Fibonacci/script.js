var cacheFibonacci = {0: 0, 1: 1, 2: 1, 3: 2};

var fibonacci = function(n) {
  
  if(cacheFibonacci[n] != undefined){
    return cacheFibonacci[n];
  }
  else{
    if(n == 0 || n == 1){
      cacheFibonacci[n] = n;
      return cacheFibonacci[n];
    }
    var x = fibonacci(n-1) + fibonacci(n-2);
    cacheFibonacci[n] = x;
    return cacheFibonacci[n];
  }
}

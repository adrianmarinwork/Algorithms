function domainName(url){
  var withouFirstPart = (url.replace(/http:\/\/|https:\/\/|www./g, ''));
  
  var withoutLastPart = withouFirstPart.substring(0, withouFirstPart.indexOf('.'));
  
  return withoutLastPart;
  
}

function description(percep,light,temp){
  if (percep > 49 && light > 0){
    return "Cloudy with a chance of meatballs"
  } else if (temp < 0) {
    return "'t is pure baltic out 'ere"
  } else if (temp > 25 && percep < 30 && light === 0){
    return "😎"
  }
  
  return ""
}

function tempHandler(pos){
  
}
//api.meteomatics.com/validdatetime/parameters/l,l/JSON
navigator.geolocation.getCurrentPosition(tempHandler);

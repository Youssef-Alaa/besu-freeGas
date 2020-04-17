function addZero (number) {
  if(Number(number) < 10){
    return '0' + number;
  }
  return number
}

exports.timeNow = () => {
  const today = new Date();
  const time = addZero(today.getHours()) + ":" + addZero(today.getMinutes()) + ":" + addZero(today.getSeconds());
  return time;
}

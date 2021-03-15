//--------------------min
exports.min = function min (array) {
  if(!array || array.length === 0){
    return 0;
  }

  let min = array[0];
  for(let i = 1; i < array.length;i++){
    if(min > array[i]){
      min = array[i];
    }
  }
  return min;
}


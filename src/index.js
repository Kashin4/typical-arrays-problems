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

//--------------------max

exports.max = function max (array) {
  if(!array || array.length === 0){
    return 0;
  }

  let max = array[0];
  for(let i = 1; i < array.length;i++)
  {
    if(max < array[i])
    {
      max = array[i];
    }
  }

  return max;
}
//--------------------avg
exports.avg = function avg (array) {
  if(!array){
    return 0;
  }

  let avg = 0;
  let count = 0;
  for (let i = 0; i < array.length;i++)
  {
      avg += array[i];
      count++;
  }

  return count > 0 ? avg / count : 0;
}
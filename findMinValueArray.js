// find smallest value in the value;

const findminValueArray = (arr) =>{
    let min = arr[0]
  for(let i = 1; i<=arr.length;i++){
      if(arr[i]<min){
           min = arr[i];        
      }
  }
  return min;

}

const array = [20,24,14,15,27];

const arraymin_Value = findminValueArray(array);
console.log(arraymin_Value);

// find Max Value in Array

const findMaxValueArray = (arr) =>{
      let max = arr[0]
    for(let i = 1; i<=arr.length;i++){
        if(arr[i]>max){
             max = arr[i];        
        }
    }
    return max;

}

const array = [1,2,4,5,7];

const arrayMax_Value = findMaxValueArray(array);
console.log(arrayMax_Value);


// Find Even number using loop

const Find_Even = (a) =>{
    return a%2===0;
}
let num = 14
if(Find_Even(num)){
    console.log(`${num} is an even number.`);
}
else{
    console.log(`${num} is not Even number.`)
}

const findEven = (a) =>{
    return a%2===0;
}

const find_Even = (start,end) =>{
    const EvenNum = [];
    for(let i = start ; i<=end;i++){
        if(findEven(i)){
            EvenNum.push('\n',i);
        }
    }
    return EvenNum;
}
const startRange = 1;
const endRange = 30;
const EvenNum = find_Even(startRange,endRange);
console.log(`Even numbers in the range ${startRange} to ${endRange}`)
console.log(EvenNum.join(' '));
// find_Even(25)
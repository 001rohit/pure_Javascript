// #2 find the factorial using function

const fact=(num)=>{
    let num1 = num;
    let fact = 1;
    if(num1<0){
        return `${num1} is Nagative value....(not accapt),\n please again enter the integer value  `;
    }
     for(let i=1;i<=num1;i++){
        fact =fact*i;
    }
    return fact;
}
console.log(fact(5));

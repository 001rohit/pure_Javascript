
const  heighest_Common = (num1,num2) =>{
    console.log(`H.C.F of ${num1} and ${num2} are:`);

    const limit = Math.min(num1,num2);
    for(let i = 1 ; i<=limit;i++){
        if(num1%i===0  && num2%i===0){
            console.log(i);
        }
    }
}
const Num1 = 112;
const  Num2 = 108;

heighest_Common(Num1,Num2);

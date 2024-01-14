//  Find the perfect qube number
const perfect_squre = (num)=>{
    for(let i = 1; i*i*i <= num;i++){
     if(i*i*i===num){
         return true;
     }
    }
    return false;
 }
 console.log(perfect_squre(27));
const calculate = (a,b,operation) => {
    return operation(a,b);
}


const concatenate = (str1,str2) =>{
    return str1+str2;
}

const result = calculate("Ram"," Shyam",concatenate);
console.log(result);

const sumOfTwoNumbers = calculate(3,6,(a,b)=>{return a+b;})
console.log(sumOfTwoNumbers);


const sub = (a,b)=>{
    return a-b;
}

const diffOfTwoNumbers = calculate(8,3,sub);
console.log(diffOfTwoNumbers);

const mulOfTwoNumbers = calculate(2,5,(a,b)=>a*b)
console.log(mulOfTwoNumbers);

const div = function(a,b){
    return a/b;
}

const quotient = calculate(23,2,div);
console.log(quotient);

function rem(a,b)
{
    return a%b;
}

const remainder = calculate(15,4,rem);
console.log(remainder);

const power = calculate(2,3,function(a,b){
    return a**b;
})
console.log(power);
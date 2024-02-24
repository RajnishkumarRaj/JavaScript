const arr = [4,8,2,-4,6,3,0,-5,-8,2]


const firstNeg = (num)=>{
    return num<0;
}

// console.log(arr.find(firstNeg));
// console.log(arr.findIndex(firstNeg));
// console.log(arr.map(firstNeg));
// console.log(arr.filter(firstNeg));
// console.log(arr.every(firstNeg));
// console.log(arr.some(firstNeg));

arr.forEach((element)=>{
    console.log(element);
})
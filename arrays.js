const arr1 = [5,8,9,4,6,3,7,1,2,8,4,5];

// console.log(arr1);
// console.log(arr1[5]);
// console.log(arr1.length);
// arr1.push(9);
// console.log(arr1);
// arr1.pop();
// console.log(arr1);
// arr1.unshift(1);
// console.log(arr1);
// arr1.shift();
// console.log(arr1);
// console.log(arr1.sort());
// console.log(arr1.indexOf(8));
// console.log(arr1.indexOf(10));
// console.log(arr1.includes(5));
// console.log(arr1.includes(10));
// console.log(arr1.slice(3,6));

const arr2 = [5,8,6,4,true,'a',"Ram",{name : "Rajnish"},function add(a,b){return a+b;}];
console.log(arr2);

const arr3 = arr2;
arr3[2]=10;
console.log(arr2);
console.log(arr3);
arr3.pop();
console.log(arr3);
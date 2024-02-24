console.log("World");
// console.log("hello");
// setTimeout(
//     function(){
//         console.log("It will take 3 second");
//     },3000)
// console.log("hello");


function getCheese(callback){
    setTimeout(
        () => {
            const cheese = "🧀";
            console.log("here is cheese",cheese);
            callback(cheese)
        },3000)
}

function getdough(callback){
    setTimeout(
        () => {
            const dough = "🍪";
            console.log("here is dough",dough);
            callback(dough)
        },3000)
}

function bakePizza(callback){
    setTimeout(
        () => {
            const pizza = "🍕";
            console.log("pizza is ready",pizza);
            callback(pizza)
        },5000)
}

getCheese(()=>{
    getdough(()=>{
        bakePizza((pizza)=>{
            console.log("here is pizza",pizza);
        })
    })
});
//Basics
//Asynchronous fn
// console.log("Hello");

// setTimeout(function() {
//     console.log("It will execute after 3 sec");
// },3000);

// console.log("World");



//This is call back hell
function getCheese(callback) {
    setTimeout(()=>{
        const cheese = "🧀";
        console.log("Here is cheese",cheese);
        callback(cheese)
    },2000);
}

function getdough(callback) {
    setTimeout(()=>{
        const dough = "🧀"+"🍪";
        console.log("Here is dough",dough);
        callback(dough)
    },2000);
}

function bakePizza(callback) {
    setTimeout(()=>{
        const pizza = "🧀"+"🍪"+"🍕";
        console.log("Pizza is ready",pizza);
        callback(pizza)
    },5000);
}

getCheese(()=>{
    getdough(() => {
        bakePizza((pizza) => {
            console.log("Here is pizza",pizza);
        })
    })
});
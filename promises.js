//structure of promises
// const promises = new Promise(function)


const ticket = new Promise(function(resolve, reject){
    const isBoarded = false;
    if(isBoarded)
    {
        resolve('you are not in the flight');
    }
    else
    {
        reject('your flight has been cancelled');
    }
})

ticket.
    then((data)=>{
        console.log("Woo",data);
    })
    .catch((data)=>{
        console.log("ohh no",data);
    })
    .finally(()=>{
        console.log("I will always be executed");
    })

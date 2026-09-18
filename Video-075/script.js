function orderPizza(callback) {
    setTimeout(function () {
        console.log("Pizza is ready");
        callback();
    }, 2000);
}

function eatPizza() {
    console.log("I am eating the pizza");
}

orderPizza(eatPizza);
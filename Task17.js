function discount(price) {
    return function(percent) {
        let final = price - (price * percent / 100);
        console.log("Final Price : " + final);
    };
}
discount(1000)(10);
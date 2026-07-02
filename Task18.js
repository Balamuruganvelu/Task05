function salary(base) {
    return function(bonus) {
        return function(allowance) {
            console.log(base + bonus + allowance);
        };
    };
}
salary(30000)(5000)(2000);
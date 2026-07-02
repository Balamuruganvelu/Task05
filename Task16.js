function* fruitGenerator() {
    yield "Apple";
    yield "Orange";
    yield "Banana";
}
const fruit = fruitGenerator();
console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);
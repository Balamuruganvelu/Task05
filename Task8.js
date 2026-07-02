console.log(a);
var a = 100;
// Output: undefined (var is hoisted, initialized as undefined)

console.log(b);
let b = 200;
// Output: ReferenceError - Cannot access 'b' before initialization (TDZ)
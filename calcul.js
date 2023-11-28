const a = 10;
const b = 20;
const add = (a,b) => (a+b);
const sub = (a,b) => (a-b);
module.exports = {add,sub}
console.log("Addition");
console.log(add(a,b));
console.log("Subratccd");
console.log(sub(a,b));
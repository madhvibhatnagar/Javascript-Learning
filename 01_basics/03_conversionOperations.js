let score = "Madhvi";
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number (score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //Nan -

//"33" => 33
// "33hd" => NaN => type - number
// true => 1; false => 0
// 1=> true; 0 => false
//"" => false
// "Madhvi" => true

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
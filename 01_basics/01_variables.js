const accountId = 14453 // cannot be changed
let accountEmail = "maddy@gmail.com" //
var accountPassword = "56464"
accountCity = "jaipur" // not recommending
let accountState;

//let and var --scope 

/*
prefer not to use var
because of issue in block scope and functional scope
*/

//accountId = 2// not allowed

accountEmail = "hasdh@jhdjfh.com"
accountPassword = "7364764"
accountCity = "delhi"

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity, accountState])

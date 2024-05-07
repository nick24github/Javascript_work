const accountId = 111
let accountEmail = "nikita@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


// accountId = 2  // Not allowed

accountEmail = "niki@gmail.com"
accountPassword = "212121"
accountCity = "Bangaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
Preferred Not to use var
because issue in block scope and functional scope 
*/
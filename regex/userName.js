/*
1) Usernames can only use alpha-numeric characters.

2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3) Username letters can be lowercase and uppercase.

4) Usernames have to be at least two characters long. A two-character username can only use alphabet and numbers as characters.
*/

let userName = "Rt";

// let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
// let userCheck = /^[A-Za-z]{1,}\d*/;
let result = userCheck.test(userName);

console.log(result);

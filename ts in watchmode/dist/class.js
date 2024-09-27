"use strict";
class User {
    constructor(uname, id) {
        this.city = ""; //declaring types for fields
        this.name = uname;
        this.Id = id;
    }
}
const printusercreds = new User("bharat", 26); //"bharat" is unamw and 26 is id here it is passed to name and Id of user class
//we can access the fields now like name and Id
console.log(printusercreds.name);
printusercreds.city = "Mumbai";

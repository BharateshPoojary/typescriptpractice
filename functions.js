"use strict";
// const sumValue = (num1 :number, num2: number = 4 ): number =>{
Object.defineProperty(exports, "__esModule", { value: true });
// return num1 + num2;
// return "hello";
// }
// /**In sumValue function we specified the argument with the type and also we can specify the type of returning value like here I specified the returning values type must be a number  */
// sumValue(1 );
var values = [1, 2, 3];
values.map(function (value) {
    return "hi";
});
function consoleError(errmsg) {
    console.log("Hi from console");
    console.log(errmsg);
    //return ""cannot be done as I am mentioning the return type as void
}
var handleError = function (errmsg) {
    throw new Error(errmsg); //This is a better way to handle error as per docs It never returns a value 
};
//It terminates the exceution of program and handle the error of functions
//Bad behavior of objects
var User = {
    name: "Bharat",
    email: "bharat@gmail.com",
    Id: 21515,
    isActive: true
};
var createUser = function (_a) {

    var name = _a.name, Id = _a.Id;
    //({name,Id} It is the properties which we are using inside the function sent to the function parameter
    //{name:string , Id:number}) this is the type of properties which are sent as arguments to the functions 
    //{name:string,Id:number}it is the returning type which is in object
    return { name: name, Id: Id };
    // return {name:"bharat",Id:21501}Its a confusing so please take care (returning objects)
};
var newUser = { name: "bharat", Id: 101, email: "bb@gmail.com" };
createUser(newUser); //here we cant include email as it is not included when defining parameter

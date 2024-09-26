// const sumValue = (num1 :number, num2: number = 4 ): number =>{

// return num1 + num2;
// return "hello";
// }

// /**In sumValue function we specified the argument with the type and also we can specify the type of returning value like here I specified the returning values type must be a number  */
// sumValue(1 );

const values = [1,2,3];
values.map((value :number):string =>{
    return "hi"
})
function consoleError(errmsg:string):void{//void means it returns nothing
    console.log("Hi from console");
    console.log(errmsg);
    //return ""cannot be done as I am mentioning the return type as void
}
const handleError = (errmsg :string):never  =>{
throw new Error(errmsg);//This is a better way to handle error as per docs It never returns a value 
}
//It terminates the exceution of program and handle the error of functions
//Bad behavior of objects
const User = {
    name:"Bharat",
    email:"bharat@gmail.com",
    Id:21515,
    isActive:true
}
const createUser =({name,Id}:{name:string , Id:number}):{name:string,Id:number}=>{//So here I am specifying the returning type in objects 
    //({name,Id} It is the properties which we are using inside the function sent to the function parameter
    //{name:string , Id:number}) this is the type of properties which are sent as arguments to the functions 
    //{name:string,Id:number}it is the returning type which is in object
    return {name , Id};
// return {name:"bharat",Id:21501}Its a confusing so please take care (returning objects)
}
const newUser = {name:"bharat",Id:101,email:"bb@gmail.com"}
createUser(newUser)//here we cant include email as it is not included when defining parameter
//but we can wrap the properties in a different variable and then we can pass and it is accepting at that time 
//which is a bad behavior of objects so it should not be it should stop me from doing like this similarly how it is doing the same way when I am passing the same (property) directly when calling the function
export{}

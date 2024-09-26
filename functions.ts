// const sumValue = (num1 :number, num2: number = 4 ): number =>{
// return num1 + num2;
// // return "hello";
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
export{}
let Id :number|string;//so this is unions in ts we use pipe symbol to declare two or more types for a single variable
Id = 12;
//Defining a custom union type
type normalMember = {
    name:string
    Id:number
}
type premiumMember = {
    username:string
    Id:number
}
let member:normalMember|premiumMember={//here member variable can have object of type normal or premium member as well 
    username:"bharat",
    Id:12
}
member={
    name:"xyz",
    Id:101
}
//unions in functions
const addNum=(num :string | number)=>{//here num can have type string or number 
//num.toLowerCase()toLowerCase is a method which can only be applied to string type, for number type its not possible
//so it cant be done
//if we have to make use of toLowerCase() when ever there is a string type we can use if clause with typeof keyword
if (typeof num === "string") {//here if the typeof num is string then it enters the if clause or else not 
    return num.toLowerCase();  
}   
 return num +2; //This will only be returned when type is number
}
addNum(2);

//unions in array;

let stringornumArr: number[] | string[] = [1,2,3,4] // This is an array which can have an arrayelements full of number type or string type no mixture of both type 
let mixtureArr:(number | string | boolean )[] = [12,1,"34",2,true,4,4,4,3,2,1,1,2,3,3,3];
//Above is a numArray which is having a mixturetype number string or boolean

//we can define some fixed values
let PI:3.14 ;
PI = 3.14;//here PI value must be 3.14 cannot be other than this

//similary we can fix any values like a variable can have this much of possible values only like that
let seats:"left" | "middle" | "right";
//seats = "higher"; so this cannot be done as seats can be left middle or right only. 
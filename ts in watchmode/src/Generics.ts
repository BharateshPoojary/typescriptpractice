//Defining an array
const myarr:Array<number>=[];//It is a generic type annotation, meaning this array can only contain elements of the type number.

//functions using generics
function firstOne(val:number|Boolean):number|Boolean{//This is a common method which we use in order to work with multiple types or we can use any keyword
return val ;
}
//firstOne("4")It cannot  be done as it can only accept number or boolean
function secondOne<Type>(val:Type):Type{
return val;
}
secondOne("5")//here as we used generic type it can accept value of any type and it locks the particular type and returns in that type only 
//we can define a custom type as well
interface customType{
    brand:string,
    type:number
}
secondOne<customType>({brand:"3",type:7})
/**
 * By including <Type> in the function definition, you're defining a generic type parameter. This allows the function to accept any type, and it will use that type consistently within the function.
Parameter val: Type: This specifies that the parameter val will be of whatever type is passed to Type.
Return Type Type: The function returns a value of the same type Type that was passed in, ensuring that the output matches the type of the input.
So, this function will take any type as an argument, lock that type for that particular invocation, and return a value of that same type.
Using secondOne with <customType>: When you call secondOne<customType>, you’re explicitly setting the generic parameter Type to be customType.
This means secondOne now expects an object that matches the structure of customType and will return the same type.
So, { brand: "3", type: 7 } is passed in as the argument, which satisfies the customType structure, and the function returns this object with the exact same type.
 */
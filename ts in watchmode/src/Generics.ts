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
secondOne(3)//here as we used generic type it can accept value of any type and it locks the particular type and returns in that type only 
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
//we can pass an array to function secondOne([1,2,3]) like this and the function type is automatically converted to array type so there is a question 
//why to Use Type[] Explicitly in function definition ? the reason is If you explicitly define the parameter as Type[], you’re making it clear that the function is designed to only accept arrays.
//it will be benficial for other devs to understand the code
function thirdOne<T>(myarr:T[]):T[]{
return myarr;
}
//here I have defined a function  which takes an array as input parameter and returns an array itself

//Using arrow functions <T,> this is juat a syntactical sugar where we put , inside <T> in order to differentiate between a react component and generic type
const fourthOne =<T,> (val:T[]):T=>{
return val[4];
}

function fifthOne<T,U extends number>(val1:T,val2:U):object{
return {val1,val2}
}
 const vals =  fifthOne("2",5);
//this will give the output { val1: "2", val2: 5 } but we cannot access the  specific property as we declared the return type as object which is a broader part to accees it we have to mention the return type in a more specific manner like {val1:T,val2:U } like this then we can access the specific  property 

 
//we cannot pass string as second argument to a number type which we defined in function definition 
//although it restricts the usage of generics but it could be used in some cases where we have a custom types 
//e.g.
interface Bank{
    acno:number,
    acname:string
}

function customType<T, U extends Bank>(val3:T,val4:U):object{
return{val3,val4};
}
customType(3,{acno:2,acname:"bh"})
//like in this scenario if we want to specify a custom type we can use extends keyword

//Generic classes
//Generics allow you to create a class, function, or interface that works with various types while ensuring type safety.
class AplhaRec<T>{
        constructor(
            public alpha:T
        ){}
    getAplha():T{
        return this.alpha;
    }
}
const a = new AplhaRec<string>("Hello");
console.log(a.getAplha());
//This is a generic class where it can accept string type values like this we can do for any type and it will lock that value ensuring typesafety simlar to generic function which we seen previously
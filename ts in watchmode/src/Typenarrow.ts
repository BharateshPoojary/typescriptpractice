/**Type narrowing in TypeScript refers to the process of refining the type of a variable within a specific block of code. TypeScript can automatically narrow down the type based on control flow analysis, such as if statements, switch statements, and type-checking functions.
 * 
 * Common Way of Type Narrowing
Using typeof: You can narrow down types based on primitive types like string, number, and boolean.
 */
function typeNarrow(a :string|number|null|string[]){
    if(a){
        if(typeof a === "string"){
            return a.toLowerCase();
        }else if(typeof a === "object"){
            // a.forEach(asele=>{
            //     console.log(asele);
            // })
            // return
            for(const s of a){
                console.log(s);
                
            }
            return
            //foreach and for..of loop is specifically for an array
            //for..in loop can be used for objects of keyvalue pair
        }
        return a+3;
    }else{
        console.log("Its a null type");
        
    }  
}
//here we have made type narrowing where we used typeof operator in order to check the type and perform  specific type operation 
//the in operator narrowing
interface Creditors{
    acname:string,
    acno:number
}
interface Debtors{
    acname:string,
    acno:number,
    isPaid:boolean
}
function isDebtPaid(client:Creditors|Debtors){
    //return client.isPaid It will throw an error as property isPaid only exists with Debtors interface
    if("isPaid" in client){
        return client.isPaid;
    }//here we used the in operator to breakdown the properties of interface and we checked if ispaid property exist in client if it is then inside that we can access the isPaid property(Insideif client will be debtors only as we checked using in operator if the property exists then only it will come else it will not  

}
//instanceof operator
function isInstance(x:Date|string){
    if(x instanceof Date){//if x is an instance of Date object
        console.log(x.toUTCString());
        
    }else{
        console.log(x.length);//else x is a string it will give the length of string 
        
    }
}
isInstance(new Date());//creating an instance of date
isInstance("hello bharat")

//Type predicates in ts
type Fish={swim:()=>void}//type Fish defines an object type with a swim method that returns void. Any object that is assigned this type must have a swim method.
type Bird={fly:()=>void}
function isFish(pet:Fish|Bird):pet is Fish{
    return(pet as Fish).swim !== undefined
}//if it is not undefined then the pet is Fish and we can access its method 
//if we not make the return type pet is Fish it returns a boolean value 
//at that time ts is still confused whether its a Fish or Bird type so we have to explicitly cast that pet is Fish thatswhy the return type is like that

function checkIsFish(pet:Fish|Bird){//If the type of pet is fish 
    if(isFish(pet)){//It will verify here  by calling is Fish function if it is fish 
        pet.swim();//we can access its method and do some specific operation
        console.log("Its a fish");
    }else{
        pet 
        console.log("Its a bird"); 
    }
}

let fish:Fish={
    swim:() =>console.log("Hi")
    
}//I have defined a fish object here which is having Fish type
checkIsFish(fish)//I am passing fish object of type Fish 


//Discriminated unions and exhaustive checking 
/**discriminated unions (also known as tagged unions or algebraic data types) are a way to create type-safe structures that handle different possible types of objects with a shared property. This feature is particularly useful when working with complex data structures that can vary in form but have a common distinguishing property, often referred to as a discriminant or tag.
 * A discriminated union consists of multiple types that have a common property with different literal types. TypeScript uses this property to determine the exact type of an object {in our case Shape is an object which has 3 types here} and provides type narrowing based on it. This enables TypeScript to understand which type you're working with, allowing it to provide better type checking and autocomplete suggestions.
 */
interface Circle{
    kind:"circle",
    radius:number
}
interface Square{
    kind:"square",
    side:number
}
interface Rectangle{
    kind:"rectangle",
    length:number,
    width:number
}
//Create a discriminated union type
type Shape=Circle|Square|Rectangle
function whichShape(shape:Shape){
if (shape.kind === "circle") {
    return Math.PI* shape.radius ^ 2;
}
// return shape.side * shape.side
}
// Function that uses the discriminated union
function whichShapeusingSwitch (shape:Shape){
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ^ 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            // Exhaustive check for all cases
            const _defaultforshape :never = shape
            return _defaultforshape;
    }
}
/**TypeScript automatically narrows down the type within switch statements or conditional blocks based on the discriminant property. For instance, shape.kind in the example above narrows down the type of shape to Square, Circle, or Rectangle within each case.

Exhaustiveness Checking: In the default case, you can use a variable with the never type to ensure that all possible cases are handled. If a new type is added to the Shape union in the future, TypeScript will produce an error if it is not handled in the switch statement, making the code easier to maintain. */
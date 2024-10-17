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
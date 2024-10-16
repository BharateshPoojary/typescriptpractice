"use strict";
/**Type narrowing in TypeScript refers to the process of refining the type of a variable within a specific block of code. TypeScript can automatically narrow down the type based on control flow analysis, such as if statements, switch statements, and type-checking functions.
 *
 * Common Way of Type Narrowing
Using typeof: You can narrow down types based on primitive types like string, number, and boolean.
 */
function typeNarrow(a) {
    if (a) {
        if (typeof a === "string") {
            return a.toLowerCase();
        }
        else if (typeof a === "object") {
            // a.forEach(asele=>{
            //     console.log(asele);
            // })
            // return
            for (const s of a) {
                console.log(s);
            }
            return;
            //foreach and for..of loop is specifically for an array
            //for..in loop can be used for objects of keyvalue pair
        }
        return a + 3;
    }
    else {
        console.log("Its a null type");
    }
}
function isDebtPaid(client) {
    //return client.isPaid It will throw an error as property isPaid only exists with Debtors interface
    if ("isPaid" in client) {
        return client.isPaid;
    } //here we used the in operator to breakdown the properties of interface and we checked if ispaid property exist in client if it is then inside that we can access the isPaid property(Insideif client will be debtors only as we checked using in operator if the property exists then only it will come else it will not  
}

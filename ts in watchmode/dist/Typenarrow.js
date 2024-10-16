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
            a.forEach(asele => {
                console.log(asele);
            });
            return;
        }
        return a + 3;
    }
    else {
        console.log("Its a null type");
    }
}
//here we have made type narrowing where we used typeof operator in order to check the type and perform  specific type operation 

"use strict";
//This is METHOD 1
// class User{
//     private name:string;
//     public  id:number;//bydefault it is public only 
//     readonly city:string;//declaring types for fields
//     constructor( 
//       uname:string,id:number,ucity:string ){//constructor with ucity,uname as string and id as number 
//         this.name = uname;
//         this.id = id;
//         this.city = ucity;
//     }
// getName(){
//      return this.name;//name can only be accessed with in class
// }
// }
//METHOD 2 USED BY EXPERTS
class User {
    constructor(//This is a simplified syntax in order to avoid this. variable name  inside parameter only we have to use modifers and it is automatically assigned as this.name = name
    name, id, city //like this city one can also be done but the name id method is concise and better
    ) {
        this.name = name;
        this.id = id;
        this.password = 2; //protected property can only be accessed with in parent and child class
        this.city = city;
    }
    get getName() {
        return this.name; //name can only be accessed with in class as it is private here but now as we used getter method it can be accessed outside
    }
    get getId() {
        return this.id;
    }
    set setName(sname) {
        this.name = sname; //simply setting the name(private) by the value of sname 
    }
    //get and set both are keyword specifically for this purpose only
    //we can also declare a method as private just like in any other language
    deleteName() {
        console.log("Name deleted successfully ");
        this.setName = "bharat";
    } //This method can only be accessed with in class not allowed from outside the class
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.email = "";
    }
    get getPassword() {
        return this.password; //password is a protected property it can only be accessed with in parent and child class and cannot be accsessed from outside the class
    }
}
const printusercreds = new User("bharat", 26, "Mumbai"); //"bharat" is unamw and 26 is id here it is passed to name and Id of user class
console.log(printusercreds.getName); //This will return name value
console.log(printusercreds.setName = "Mayank");
//we can access the fields now like name and Id
//printusercreds.city = "Mumbai";we cannot assign like this as it is readonly string
// console.log(printusercreds.name);this cannot be accessed as it is in private scope can be accessed within class itself 
//by default all fields are in public scope it is not necessary to explicitly mention it using keyword but yeah its a good practice
/**private: Warns if it's not used within the class.
public: No warning, as it could be accessed outside the class. */ 


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
class User{
    public readonly city :string ;
    constructor( //This is a simplified syntax in order to avoid this. keyword inside parameter only we have to use modifers and it is automatically assigned as this.name = name
      private name:string,
      public id:number,
      city:string//like this city one can also be done but the name id method is concise and better
      ){//here inside parantheses nothing we have to mention assignment is automatically done
        this.city = city;
    }
    get getName():string{//getter method is basically used to mainly access any private property(can also access public as well) and if we want to expose it outside the class 
        return this.name;//name can only be accessed with in class as it is private here but now as we used getter method it can be accessed outside
    }
    get getId():number{//we have to mention return type as well as  getter method is used return something may be its a number or string  
        return this.id;
    }
    set setName(sname:string){//setter method is generally used to set some property may be private or public the main concept here is it does have a return type as it is only setting the property and does not returning anything  , here atleast one parameter must be there in order to access the value for the property which needs to be changed
        this.name = sname;//simply setting the name(private) by the value of sname 
    }
    //get and set both are keyword specifically for this purpose only
   

    //we can also declare a method as private just like in any other language
    private deleteName(){
        console.log("Name deleted successfully ");
        this.setName = "bharat";
    }//This method can only be accessed with in class not allowed from outside the class
    
}
const printusercreds = new User("bharat",26,"Mumbai");//"bharat" is unamw and 26 is id here it is passed to name and Id of user class
console.log(printusercreds.getName);//This will return name value
console.log(printusercreds.setName = "Mayank");

//we can access the fields now like name and Id
//printusercreds.city = "Mumbai";we cannot assign like this as it is readonly string
// console.log(printusercreds.name);this cannot be accessed as it is in private scope can be accessed within class itself 
//by default all fields are in public scope it is not necessary to explicitly mention it using keyword but yeah its a good practice

/**private: Warns if it's not used within the class.
public: No warning, as it could be accessed outside the class. */
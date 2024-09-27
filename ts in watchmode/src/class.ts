class User{
    name:string;
    Id:number;
    city:string="";//declaring types for fields
    constructor(uname:string,id:number){//constructor with uname as string and id as number 
        this.name = uname;
        this.Id=id;
    }
}
const printusercreds = new User("bharat",26);//"bharat" is unamw and 26 is id here it is passed to name and Id of user class
//we can access the fields now like name and Id
console.log(printusercreds.name);

printusercreds.city = "Mumbai";

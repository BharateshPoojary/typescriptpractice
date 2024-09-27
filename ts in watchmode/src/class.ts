class User{
    name:string;
    Id:number;
    city:string="";
    constructor(uname:string,id:number){
        this.name = uname;
        this.Id=id;
    }
}
const printusercreds = new User("bharat",26);
printusercreds.city = "Mumbai";

type User ={
    name:string;
    Id:number;
}//Using type aliases I can define the type in objects this is a convenient method if we have to define multiple types and it becomes lengthy to define all the type inside function parameter 
const createUser = ({name,Id}:User):{name:string,Id:number} =>{
return {name,Id}//here {name,Id} is an object which must be  of type User
}
createUser({name:"bharat",Id:101})

//READONLY AND OPTIONAL 
type Creds ={
    readonly _id:string//using  readonly keyword we can avoid the manipulation of a particular field
    //example in mongoDB the _id property should not be modified so to avoid such case readonly keyword can be used
    //to avoid the modification of _id property
    name:string
    password:string
    isMember?:boolean//using ? symbol we can optionalize a field like here if  isMember is not passsed in function or variable then also ok NO PROBLEM
}
let creds:Creds ={//here creds variable is of type Creds
    _id:"A101",
    name:"bharat",
    password:"1234"//here we can see I am not passing isMember as it is optional 
}
//creds._id="101"; this cant be done as it is read only property we cannot manipulate

type credDetails = {
    cardNumber:number
}
type userDetails={
    userName:string
}
type userCreds=credDetails & userDetails ;
//above is the common scenario where we can combine the two types using & symbol now userCreds is having two property

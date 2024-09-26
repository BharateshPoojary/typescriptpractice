type User ={
    name:string,
    Id:number
}//Using type aliases I can define the type in objects this is a convenient method if we have to define multiple types and it becomes lengthy to define all the type inside function parameter 
const createUser = ({name,Id}:User):{name:string,Id:number} =>{
return {name,Id}//here {name,Id} is an object which must be  of type User
}
createUser({name:"bharat",Id:101})
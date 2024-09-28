interface Fileexplorer{//this are  property which are must have thing in classes which implements it 
    notes:string
    phonenolist:number
}/*interfaces are basically used when we have to follow some protocol like for implementing file you have to implement this property comulsorily later you can implement other property as well */
interface Photo{
    getPhoto():string//we can define a method like this inside an interface
}

class Email implements Fileexplorer{
    constructor(
      public  notes:string,
        public phonenolist:number//iF any property is not there it leads to an error
    ){}
}
class FileEditor implements Fileexplorer,Photo{//multiple interface seperated by comma 
    constructor(
        public notes:string,
        public phonenolist:number,
        private file:string//here I have implemented the property of fileexplorer along with additional property which is note there in interface
    ){}
    getPhoto(): string {//this is a method defined in  photo interface
        return "";
    }
}
/**TypeScript interfaces expect the properties to be public by default */
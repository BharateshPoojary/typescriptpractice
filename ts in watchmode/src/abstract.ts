abstract class A{
    constructor(
        public getAlphabet:string,
        public getnumOfAlpha:number
    ){}
    abstract getAlpha():void;//here we can define abstract method which must be compulsorily implemented by the class which is extending it 
//We can define a method which must be bydefault and if there is no changes in that  we can define  and implement here w/o abstract keyword it will be accessible at the time of creating intance of child class and this can be a difference as well between an interface and abstract classes where in interface we cannot implement methods like this
helloFromA():string{
    return "Hi I am A Hope you are doing well";
    
}
}
// const a  = new A("a",5);we cannot create an instance of abstract class  
class B extends A{
    constructor(
        public getAlphabet:string,
        public getnumOfAlpha:number,
        public isLower:boolean//new properties can be added
    ){
        super(getAlphabet,getnumOfAlpha);//this properties are from super class so it must be called using syntax method
    }
    getAlpha(): void {
    console.log("Hi");
    
}
}
const bh = new B("c",4,true);//in order to use the abstract class we have to inherit it and create an instance of Child class
bh.helloFromA();//like this we can access the method defined in abstract class

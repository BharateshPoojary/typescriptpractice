interface A{
    readonly dbId : number
    name:string
    DiscId?:number
    //METHOD 1 
    // generateAmt:()=>string we can define methods like this which cant be done in type so thats make difference and can be helpful in some cases
   //geneerateAmt:()=>string this method is resturning a string type 
   //METHOD 2
    generateDisct(couponname:string,discount:number):number | string
//generateSisct() includes parameter and is returning either string or number
}

//REOPENING OF AN INTERFACE
interface A{//This cannot be done in type aliases it leads to an error
    Uid:number//adding new field to an extending interface 
}
interface B extends A{//We can extend the interface like this using extends keyword
Bsid:number//we can add more field to an existing interface like this or else in type aliases we have to using & symbol
}

const user :B={
    Bsid : 17,
    dbId:23,
    Uid:12,
    name:"bharat",
    generateDisct:(cname = "dhamaka",discount =10)=> {//The parameter name can be different here no issue 
        return discount
    },
}

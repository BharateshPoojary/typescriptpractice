interface Userint{
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
const user :Userint={
    dbId:23,
    name:"bharat",
    generateDisct:(cname = "dhamaka",discount =10)=> {//The parameter name can be different here no issue 
        return discount
    },
}

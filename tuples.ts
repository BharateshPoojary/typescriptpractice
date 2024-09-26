let arr:[string,number,boolean,number]=["123",12,true,12]//THis is an example of tuple where we can fix the element type for a partcular position in an array
//e.g.here arr is an array where its 1st position must be a string and 2nd position must be number and 3rd must be boolean 
//if we add one more element of any type it leads to an error 

type a =[number ,string];
let newA :a=[1,"101"];
newA.push(121)//Now it not allows to push other type of values apart from number or string but previously it used to allow 
//Here is a flow it is allowing me add the values to it using array methods which should not be 
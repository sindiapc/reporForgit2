let myName:string="John Galt"
console.log(myName);
//arrow function

const getSquare =(a:number,b:number):number=>{
    console.log("Finding the square of ",a,"+",b);
    return (a*a)+(b*b)+(2*a*b);
    
}
console.log(getSquare(5,3));
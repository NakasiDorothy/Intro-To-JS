// function that calls dynamic names and age
function descriptionDynamic(fname,age) {
    console.log('Your name is', fname, 'and age is', age)
};

descriptionDynamic("Dorothy" ,"26")
descriptionDynamic("Pearl" ,"3")
descriptionDynamic("Praise" ,"5")
descriptionDynamic("Charlton" ,"8")
descriptionDynamic("Clarence" ,"13")

//function that takes another function as a parameter and returns the result of calling the parameter function

function Comparison(isEqual, x,y){
    return isEqual(x,y)
}
function isEqual(x,y){
  if(x>=y) return x * y;{
     return  
  }
 
//   else{
//       x-y;
//   }
}
let result = Comparison(isEqual,5,3)
console.log(result)

//an arrow function and in it have two local variables concatenated together and  assign the result to a new variable and the function call should print to the console.

let desc = (fname,lname) => fname + lname;
console.log(desc ("Dorothy", "Nakasi"))

// using a for loop
let max = 18;
for(let age=0; age<=max; age++){
    console.log('I love Uganda')
}
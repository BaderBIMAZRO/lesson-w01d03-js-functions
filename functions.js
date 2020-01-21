//Define a `youRock` function that accepts a string argument of a name and returns a string using that name.
    const youRock = function(name){
        console.log('you rock ' + name);
    };
    youRock('Mohammed');
// square function
const square = function(num){
    return num *= num;
};
square(2);
// cube function
const cube = function(num){
     return num * num * num;
     
};
cube(2);
// toTheFourth
const toTheFourth = function(num){
    return num * num * num * num;
}
toTheFourth(2);
// calculator
const calculator = function(num1, num2, option){
    if(num1!=typeof(Number) && num2!=typeof(Number)){
        console.log("calculator only accepts numbers");
    }
    else if(option === "add"){
      return num1 + num2;  
    }
    else if(option === "subtact"){
        return num1 - num2;
    }
    else if(option === "divide"){
       return num1 / num2;
    }
    else if(option === "multiply"){
        return num1 * num2;
    }
    else if(option === "something else"){
        console.log(" you can add, sub, multiple and divide");
    }

};
calculator(1, 2, "add");
calculator(1, 2, "subtract"); 
calculator(1, 2, "divide"); 
calculator(1, 2, "multiply"); 
calculator(1, 2, "something else"); 
calculator("cat", 2, "add");
//Hoisting-function == we can call function before declaration
// Function declaration is hoisted

calling()
function calling()
{
    console.log("Iam calling before declaration,I'm possible")
}


//function expression is not hoisted  <IIFE = Immediate invoked function expression>

/* var calling=function()
{
    console.log("Iam calling before declaration,I'm not possible");
} */
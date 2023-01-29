function generater(){
    var no=1;
    function inside()
    {
        console.log(no);
    }
    no++;
    inside();
}
generater();


// Closure is a creation of function inside another function (the lexical environment)
// Allows any level of nested function
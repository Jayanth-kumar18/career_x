var x=10;
function hoist()
{
    x=30;
    console.log(x);
    var x;
}
hoist();
console.log(x);

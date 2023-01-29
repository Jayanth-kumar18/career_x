function fibonacci(n){
    n1=0;
    n2=1;
    console.log(n1)
    for (i=0;i<n;i++)
    {
        console.log(n2)
        n2=n1+n2;
        n1=n2-n1;

    }
}
fibonacci(10);

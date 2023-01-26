function custom(lim){
    var count=0;
    var sum=0;
    for(let i=1;i<=lim;i++){
        count++;
        sum=sum+i;
        document.write(i+" ");
        if(count==4){
            count=0;
            document.write("<b>"+sum+"</b> ");
            sum=0;
        }
    }
}
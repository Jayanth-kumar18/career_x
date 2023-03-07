function Car(make,model,year,color){
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
}
const x=new Car("Hyundai","venue",2021,"blue");
console.log(x.make+" "+x.model+" "+x.year+" "+x.color);

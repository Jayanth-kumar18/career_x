class Employee{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    printdetails(){
        document.writeln("Employee id is:"+this.id+"<br>Employee name is:"+this.name+"<br>Employee salary is:"+this.salary);
    }

}
var emp1=new Employee(11101,"Jayanth",100000);
var emp2=new Employee(11102,"Pramod",200000);
var emp3=new Employee(11103,"Akash",300000);
emp1.printdetails();
emp2.printdetails();
emp3.printdetails();
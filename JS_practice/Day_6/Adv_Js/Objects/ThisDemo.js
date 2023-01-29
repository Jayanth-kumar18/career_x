const employee={
    name:'Jayanth',
    age:20,
    salaray:100000,
    display:function(){
        return " Name: "+this.name+", Salary of employee: "+this.salaray;
    }
}

console.log(employee.display())
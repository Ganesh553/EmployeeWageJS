class EmployeeWage{
    employeeWage(){
        var Full_Time = 1;
        let Employee = Math.floor(Math.random() * 2);
        if (Employee == Full_Time)
            console.log("Employee Present")
        else
            console.log("Employee Absent")
    }
}
let ref = new EmployeeWage();
ref.employeeWage();
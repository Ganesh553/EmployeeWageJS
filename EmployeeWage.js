class EmployeeWage{
    employeeDailyWage(){
        var Full_Time = 1;
        var Part_Time = 2;
        var Emp_Rate_Per_Hr = 20;
        var emp_Hr = 0;
        let Employee = Math.floor(Math.random() * 3);
        if (Employee == Full_Time){
            emp_Hr = 8;
        }        
        else if (Employee == Part_Time){
            emp_Hr = 8;
        }       
        else{
            emp_Hr = 0;
            console.log("Employee Is Absent")
            return;
        }   
        var Employee_Wage = Emp_Rate_Per_Hr * emp_Hr;
        console.log(Employee_Wage)
    }
}
let ref = new EmployeeDailyWage()
ref.employeeDailyWage();

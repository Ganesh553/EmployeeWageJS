class EmployeeWage{
     employeeDailyWage(){
        var Full_Time = 1;
        var Part_Time = 2;
        var Emp_Rate_Per_Hr = 20;
        var emp_Hr = 0;
        let Employee = Math.floor(Math.random() * 3);
        switch(Employee){
            case Full_Time:
                emp_Hr=8;
                break;
            case Part_Time:
                emp_Hr=8;
                break;
            default:
                emp_Hr=0;
                console.log("Employee Is Absent");
                return;
        }
        var Employee_Wage = Emp_Rate_Per_Hr * emp_Hr;
        console.log(Employee_Wage)
        var Absent=0;
        var NUMBER_OF_WORKING_DAYS=20;
        var Total_Employee_Wage=0;
        for (var Day=0;Day < NUMBER_OF_WORKING_DAYS; Day++){
            let Employee = Math.floor(Math.random() * 3);
            switch(Employee){
                case Full_Time:
                    emp_Hr=8;
                    break;
                case Part_Time:
                    emp_Hr=8;
                    break;
                case Absent:
                    console.log("Employee Is Absent");
                    break;
            }
            var Employee_Wage = Emp_Rate_Per_Hr * emp_Hr;
            Total_Employee_Wage= Total_Employee_Wage + Employee_Wage;           
        }
        console.log("Employee Daily Wage: ",Employee_Wage)
        console.log("Total Wage of Employee For 20 Days: ",Total_Employee_Wage)
    }
    WorkingHrs(day, hours){
        return day*hours;
    }
}
let ref = new EmployeeWage()
ref.employeeDailyWage();
var total_Working_Hours=ref.WorkingHrs(20,8)
console.log("Total number of Working Hours is: ",total_Working_Hours)
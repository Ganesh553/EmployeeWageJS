class EmployeeWage{

    checkEmployee(){
        let Employee = Math.floor(Math.random() * 2);
        if(Employee==0)
            console.log("Employee is Present")
        else{
            console.log("Employee is Absent")
        }
        
    }

     employeeDailyWage(){
        var Full_Time = 0;
        var Part_Time = 1;
        var Emp_Rate_Per_Hr = 20;
        var emp_Hr = 0;
        var Total_Emp_Hr=0;
        var NUMBER_OF_WORKING_DAYS=20;
        var Total_Employee_Wage=0;
        var day=0;
        var Total_Working_Day =20;
        var DailyWage = new Map()
        while (day<=Total_Working_Day && Total_Emp_Hr<=100 ){
            let Employee = Math.floor(Math.random() * 2);
            switch(Employee){
                case Full_Time:
                    emp_Hr=8;
                    DailyWage[day++] = emp_Hr*Emp_Rate_Per_Hr;
                    Total_Emp_Hr = Total_Emp_Hr+emp_Hr;
                    break;
                case Part_Time:
                    emp_Hr=4;
                    DailyWage[day++] = emp_Hr*Emp_Rate_Per_Hr;
                    Total_Emp_Hr = Total_Emp_Hr+emp_Hr;
                    break;
            }
            var Employee_Wage = Emp_Rate_Per_Hr * emp_Hr;
            Total_Employee_Wage= Total_Employee_Wage + Employee_Wage;           
        }
        DailyWage["Total_Employee_Wage"] =Total_Employee_Wage
        console.log(DailyWage)
        console.log("Total Working Hours is: ",Total_Emp_Hr)
        console.log("Total Wage of Employee : ",Total_Employee_Wage)
    }
}
let ref = new EmployeeWage()
ref.checkEmployee()
ref.employeeDailyWage();

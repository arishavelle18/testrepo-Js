const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'karl', age: 3, department: 'Finance', salary: 60000 },
    { id: 5, name: 'khielle', age: 2, department: 'Finance', salary: 60000 },
  ];

  const displayEmployees = () => {
    const totalEmployees = employees.map(user =>{
        return `<p>${user.id}:${user.name}: ${employees.name} - ${user.department} - ${user.salary}</p>`
    }).join("");
    document.getElementById("employeesDetails").innerHTML=totalEmployees;
  }

  const calculateTotalSalaries = () => {
    const totalSalaries = employees.reduce((acc,employee) => acc + employee.salary,0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

  const displayHREmployees = () => {
    const hrEmployees = employees.filter(employee => employee.department === "HR");
    const hrEmployeesDisplay = hrEmployees.map(user =>{
        return `<p>${user.id}:${user.name}: ${employees.name} - ${user.department} - ${user.salary}</p>`
    }).join("");
    document.getElementById("employeesDetails").innerHTML=hrEmployeesDisplay;
  }

  const findEmployeeById = (employeeId) => {
    const user = employees.find(employee => employee.id === employeeId);
    if(user){
        document.getElementById("employeesDetails").innerHTML=`<p>${user.id}:${user.name}: ${employees.name} - ${user.department} - ${user.salary}</p>`;
    }else{
        document.getElementById("employeesDetails").innerHTML='no employee has been found with this ID';
    }
  }
/*



                                               initialize result

                                                       │
                                                       │
                                                       │
  filteredEmployees                                    ▼
                              ◄─────────────── foreach companies
  employee.id === company.id
                                                       │
             │                                         │
             │                                         │
             │                                         ▼
             │                     initialize sum with each employee salary plus this
             │
             │                             in array filteredEmployees
             │
             │                                         │
             │                                         │
             │                                         │
             │                                         ▼
             │                     let averageSalary = sum / filteredEmployees.length
             │
             │                                          │
             │                                          │
             │                                          │
             │                                          │
             │                                          ▼
             │
             └─────────────────────────────►   plus array result

 */

const companies = [
    { id: 1, name: 'Tech Corp' },
    { id: 2, name: 'Finance Inc' },
    { id: 3, name: 'Health Plus' }
];

const employees = [
    { name: 'Alice', companyId: 1, salary: 15000000 },
    { name: 'Bob', companyId: 1, salary: 18000000 },
    { name: 'Charlie', companyId: 2, salary: 22000000 },
    { name: 'David', companyId: 2, salary: 20000000 },
    { name: 'Eve', companyId: 3, salary: 25000000 }
];

let result = []

companies.forEach(function (company) {
     let filteredEmployees = employees.filter(function (employee) {
         return employee.companyId === company.id;
     })

     let sum = 0
     employees.forEach(function (employee) {
         if (employee.companyId === company.id) {
             sum += employee.salary;
         }
     })
     let averageSalary = sum / filteredEmployees.length;
     result.push({
         name: company.name,
         employees: filteredEmployees,
         averageSalary: averageSalary
     })
})

console.log(result)
// Write your solution in this file!
// const employee = {
//     name: "John",
//     streetAddress: "No 17",
// }
// function updateEmployeeWithKeyAndValue (employee, key, value){

// }
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
  
    updatedEmployee[key] = value;
  
    return updatedEmployee;
  }
  
  // Example usage:
  let employee = {
    name: "John",
    age: 30,
    department: "HR",
  };
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
  
  console.log(updatedEmployee);
  
  console.log(employee);


  
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Update the employee object with the new key-value pair
  employee[key] = value;

  // Return the entire updated employee object
  return employee;
}


destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Manager");

console.log(employee);


function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
  
    delete updatedEmployee[key];
  
    return updatedEmployee;
  }
  
 
  
  const updatedEmployee1 = deleteFromEmployeeByKey(employee, "age");
  
  console.log(updatedEmployee);
  
  console.log(employee);
  

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
  
    return employee;
  }
  

  
  destructivelyDeleteFromEmployeeByKey(employee, "age");
  
  console.log(employee);
  // Output: { name: "John", department: "HR" } (modified employee object without the deleted key/value pair)
  
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
// Output: { name: "John", age: 30, department: "HR", position: "Manager" }


function deleteFromEmployeeByKey(employee, key) {
    // Create a clone of the employee object by copying all key-value pairs
    const updatedEmployee = { ...employee };
  
    // Delete the specified key from the cloned employee object
    delete updatedEmployee[key];
  
    // Return the updated (cloned) employee object
    return updatedEmployee;
  }
  
  // Example usage:
//   const employee = {
//     name: "John",
//     age: 30,
//     department: "HR",
//   };
  
  const updatedEmployee1 = deleteFromEmployeeByKey(employee, "age");
  
  console.log(updatedEmployee);
  // Output: { name: "John", department: "HR" }
  
  console.log(employee);
  // Output: { name: "John", age: 30, department: "HR" } (original employee object remains unchanged)
  

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the employee object
    delete employee[key];
  
    // Return the updated (modified) employee object
    return employee;
  }
  

  
  destructivelyDeleteFromEmployeeByKey(employee, "age");
  
  console.log(employee);
  // Output: { name: "John", department: "HR" } (modified employee object without the deleted key/value pair)
  
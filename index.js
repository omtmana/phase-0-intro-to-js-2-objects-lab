// Write your solution in this file!
let employee = {
    name: "Olivia Molly" ,
    streetAddress: "1864 Sagu St.",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployeeObject = {...employee};
    newEmployeeObject[key] = value;
    return newEmployeeObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    let newEmployeeByKey = {...employee};
    delete newEmployeeByKey[key];
    return newEmployeeByKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


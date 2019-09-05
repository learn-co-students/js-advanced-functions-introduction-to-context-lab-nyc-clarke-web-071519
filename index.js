// Your code here
function createEmployeeRecord(employeeArray) {
    return {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: [],
    }
}

function createEmployees(employeesArray) {
    return employeesArray.map(element => createEmployeeRecord(element))
}

function createTimeInEvent(employeeRecord,datetimeString) {
    let [date, hour] = datetimeString.split(' ')
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    });
    return employeeRecord;
}

function createTimeOutEvent(employeeRecord,datetimeString) {
    let [date, hour] = datetimeString.split(' ')
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    });
    return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
    return (timeOutEvent.hour - timeInEvent.hour) / 100
}

function wagesEarnedOnDate(employeeRecord, date) {
    return hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
}

function allWagesFor(employeeRecord) {
    return employeeRecord.timeOutEvents.reduce( (memo, e) => wagesEarnedOnDate(employeeRecord, e.date) + memo, 0)
}

function calculatePayroll(employeesArray) {
    return employeesArray.reduce((memo, employee) => allWagesFor(employee) + memo,0)
}

function createEmployeeRecords(employeesArray) {
    return employeesArray.map(element => createEmployeeRecord(element))
}

function findEmployeebyFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName === firstName)
}
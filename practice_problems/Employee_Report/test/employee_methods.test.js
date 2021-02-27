const manager = require('../employee_report.js');
const employeeManager = new manager();

test('Should contain test class', () => {
    expect(typeof employeeManager).toBe("object");
});

test('Should have method to display eligble employees', () => {
    expect(typeof employeeManager.eligibleEmployees).toBe("function");
});

test('Should display eligble employees', () => {
    expect(JSON.stringify(employeeManager.eligibleEmployees())).toBe(
        JSON.stringify(['Sepp', 'Mike'])
    );
})

test('Should contain method to sort employees', () => {
    expect(typeof employeeManager.sortNames).toBe("function");
});

test('Should sort employees by name', () => {
    expect(JSON.stringify(employeeManager.sortNames())).toBe(JSON.stringify(["Max", "Mike", "Nina", "Sepp"]));
});
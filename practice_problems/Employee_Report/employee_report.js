class EmployeeManager {
    constructor() {
        this.employees = [
            { name: 'Max', age: 17 },
            { name: 'Sepp', age: 18 },
            { name: 'Nina', age: 15 },
            { name: 'Mike', age: 51 },
        ];
    }

    eligibleEmployees() {
        const list = [];
        let currentList = this.employees;
        for (let i = 0; i < currentList.length; i++) {
            if (currentList[i].age >= 18) {
                list.push(currentList[i].name);
            }
        }
        return list;
    }

    sortNames() {
        const list = [];
        let sortedList = this.employees.sort((a,b) => {
            if (a.name < b.name) {
                return -1;
            } 
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        for (let i = 0; i < sortedList.length; i++) {
            list.push(sortedList[i].name);
        }
        return list;
    }
}

module.exports = EmployeeManager;
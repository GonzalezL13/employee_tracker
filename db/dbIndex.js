const connection = require("./connection");


class database {
    // Keeping a reference to the connection on the class in case we need it later
    constructor(connection) {
        this.connection = connection;
    }
    // Find all departments
    findAllDepartments() {
        return this.connection.promise().query(
            `SELECT 
            department.id, 
            department.name 
            FROM department;`
        );
    }

    // Find all roles, join with departments to display the department name
    findAllRoles() {
        return this.connection.promise().query(
            `SELECT * 
            FROM roles 
            LEFT JOIN department on roles.department_id = department.id;`
        );
    }

    // Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
    findAllEmployees() {
        return this.connection.promise().query(
            `SELECT 
            employee.id, 
            employee.first_name, 
            employee.last_name, 
            roles.title, 
            department.name AS department, 
            roles.salary, 
            CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
            FROM employee 
            LEFT JOIN roles on employee.roles_id = roles.id 
            LEFT JOIN department on roles.department_id = department.id 
            LEFT JOIN employee manager on manager.id = employee.manager_id;`
        );
    }

    // Create a new department
    createDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }

    // Create a new role
    createRole(roles) {
        return this.connection.promise().query("INSERT INTO roles SET ?", roles);
    }

    // Create a new employee
    createEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    }

    // Update the given employee's role
    updateEmployeeRole(employeeId, rolesId) {
        return this.connection.promise().query(
            "UPDATE employee SET roles_id = ? WHERE id = ?",
            [rolesId, employeeId]
        );
    }


};

module.exports = new database(connection);
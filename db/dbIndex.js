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
};

module.exports = new database(connection);
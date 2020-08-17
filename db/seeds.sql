use employees;


INSERT INTO department (name)
VALUES 
    ('Back Office'),
    ('Front Office'),
    ('Call Center');


INSERT INTO roles (title, salary, department_id)
VALUES 
    ('Medical Assistant Lead', 36000, 1),
    ('Medical Assistant', 32000, 1),
    ('Front Desk Lead', 33000, 2),
    ('Front Desk', 30000, 2),
    ('Call Center Lead', 33000, 3),
    ('Scheduler', 30000, 3);


INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES 
    ('Christina', 'Salas', 1, NULL),
    ('Roger', 'Garcia', 2, 1),
    ('Kayla', 'Pfeiff', 3, NULL),
    ('Cassy', 'Perrow', 4, 3),
    ('Alfredo', 'Vale', 5, NULL),
    ('Alex', 'Brown', 6, 5);
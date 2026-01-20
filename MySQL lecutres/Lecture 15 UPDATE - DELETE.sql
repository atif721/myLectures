UPDATE personal_3 SET city = "Gaibandha" WHERE id = 3;

SELECT * FROM student.personal;

UPDATE personal SET phone = "01755053195", name = "Meherin" WHERE id = 5;

SELECT * FROM student.employee;

COMMIT;

UPDATE employee SET Emp_Name = "Meherin", Emp_Age = 24 WHERE Emp_ID = 7;
DELETE FROM employee WHERE Emp_ID = 7;

ROLLBACK;
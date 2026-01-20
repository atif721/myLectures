insert into employee(Emp_ID,Emp_Name,Emp_Age,Emp_Gender,Emp_Salary)
values
(1, "Sabbir", 22, "Male", 30000),
(2, "Atif", 20, "Male", 100000),
(3, "Mahfuz", 24, "Male", 50000),
(4, "Hridy", 21, "Female", 40000),
(5, "Farhana", 22, "Female", 30000),
(6, "Rahat", 24, "Female", 75000),
(7, "Polok", 20, "Male", 55000);

select count(*) from employee;
select count(distinct city) as Count from personal_2;
select max(Emp_Salary) as "Highest Salary" from employee;
select min(Emp_Salary) as "Highest Salary" from employee;
select sum(Emp_Salary) as "Summation of Salary" from employee;
select avg(Emp_Salary) as "Average of Salary" from employee;


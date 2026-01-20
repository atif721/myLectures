create table personal_3(
	id int,
    name varchar(50),
    age int,
    gender varchar(10),
    city varchar(15)
);

insert into personal_3 (id, gender)
value (7, "Male");

insert into personal_3 (id, name, age, gender, city)
values
(1, "Atif", 20, "Male", "Raj"),
(2, "Sabbir", 22, "", "Ishwardi"),
(3, "", 23, "Male", "Godagari"),
(4, "", 21, "Female", "Mohanpur"),
(5, "Farhana", 22, "Female", "Chapai");

select * from personal_3 where name is not null;
-- inserting multiple value 
insert into personal_2 (id, name, age, gender, city, dept)
values
(1, "Atif", 20, "Male", "Raj", "CSE"),
(2, "Sabbir", 22, "Male", "Ishwardi", "CSE"),
(3, "Mahfuz", 23, "Male", "Godagari", "CSE"),
(4, "Soniya", 21, "Female", "Mohanpur", "CSE"),
(5, "Farhana", 22, "Female", "Chapai", "CSE");

-- inserting single value  
insert into personal_2 (id, name, age, gender, dept)
value (6, "Shahed", 20, "Male", "CSE");

CREATE TABLE personal_2 (
    id INT NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL CHECK (age >= 18),
    gender VARCHAR(10) NOT NULL,
    city VARCHAR(15) NOT NULL DEFAULT 'Raj',
    dept VARCHAR(10) NOT NULL
);


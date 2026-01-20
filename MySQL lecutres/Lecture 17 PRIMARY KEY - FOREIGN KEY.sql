CREATE TABLE city(
	cid INT NOT NULL AUTO_INCREMENT,
    cityname VARCHAR(50) NOT NULL,
    PRIMARY KEY (cid)
);

CREATE TABLE Personal_4(
	ID INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    percentage INT NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10) NOT NULL,
    city INT NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (city) REFERENCES city(cid)
);

INSERT INTO city(cityname) VALUES('Dhaka'),('Rajs'),('Chapai'),('Naogoan'),('Rajs'),('Mohanpur'),('Chapai');

INSERT INTO personal_4(ID,name,percentage,age,gender,city)
VALUES (1,"Abdullah",45,20,"Male",2),
(2,"Sabbir",55,22,"Male",5),
(3,"Mahfuz",75,24,"Male",3),
(4,"Soniya",57,21,"Female",6),
(5,"Nishat",87,21,"Female",4);

SELECT * FROM student.city;

SELECT * FROM student.personal_4;
# -----INNER JOIN-----
 /*
SELECT p.ID, p.name, p.percentage, p.age, p.gender, c.cityname
FROM personal_4 p JOIN city c # we can use join only instead of inner join 
ON p.city = c.cid
# WHERE p.gender = "Female"
ORDER BY p.name ;
*/

# -----LEFT JOIN RIGHT JOIN-----
/*
SELECT p.ID, p.name, p.percentage, p.age, p.gender, c.cityname
FROM personal_4 p RIGHT JOIN city c  
ON p.city = c.cid;
*/

# -----CROSS JOIN-----

SELECT p.ID, p.name, c.cityname AS City
FROM personal_4 p CROSS JOIN city c;

SELECT p.ID, p.name, c.cityname AS City
FROM personal_4 p, city c;



SELECT * FROM student.personal_4;
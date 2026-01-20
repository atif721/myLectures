# JOIN clause.

SELECT p.ID, p.name, p.age, p.gender, p.percentage, c.cityname AS City, CrN.CrName AS "Course Title"
FROM personal_4 p 
INNER JOIN city c ON p.city = c.cid 
INNER JOIN coursename CrN ON p.course = CrN.CrID
ORDER BY name;


# GROUP BY & HAVING 

SELECT city, COUNT(p2.city) AS Total
FROM personal_2 p2
GROUP BY city
HAVING COUNT(p2.city) >= 2
ORDER BY COUNT(p2.city) DESC ;
 

SELECT * FROM student.personal_4;
SELECT * FROM student.coursename;

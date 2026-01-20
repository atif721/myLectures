SELECT * FROM student.student_info;

ALTER VIEW studentdata AS
SELECT 
    s.ID, s.name, c.CrName, ci.cityname
FROM
	student_info s
        INNER JOIN
    coursename c ON s.courses = c.CrID
INNER JOIN city ci ON s.city = ci.cid; 

RENAME TABLE studentdata TO studentcrci;

SELECT * FROM studentcrci;
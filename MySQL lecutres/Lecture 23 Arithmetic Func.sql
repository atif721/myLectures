SELECT 5 + 5 AS Result;

SELECT id, name, (percentage * 12) AS "New percentage" FROM student.student_info; 

SELECT id, name, percentage FROM student.student_info ORDER BY rand(); 

SELECT pi();
SELECT round(1234.757,2);
SELECT ceil(7.25);
SELECT floor(5.555);
SELECT pow(2,5);
SELECT sqrt(64);
SELECT round(rand() * 100);
SELECT floor(7 + (rand() * 6));  
SELECT abs(-2.5);
SELECT sign(-25);

COMMIT;

 
SELECT * FROM student.student_info;

SELECT 
    ID,
    name,
    percentage,
    IF(percentage >= 33, 'Pass', 'Fail') AS Result
FROM
    student_info;
    
SELECT 
    ID,
    name,
    percentage,
    CASE
        WHEN percentage >= 80 AND percentage <= 100 THEN 'Merit'
        WHEN percentage >= 60 AND percentage <= 79 THEN 'First Dvision'
        WHEN percentage >= 45 AND percentage <= 59 THEN 'Second Divison'
        WHEN percentage >= 33 AND percentage <= 44 THEN 'Third Division'
        WHEN percentage < 33 THEN 'Fail'
        ELSE "Not Correct %"
    END AS Grade
FROM
    student_info;

UPDATE student.student_info 
SET 
    percentage = (CASE id
        WHEN 3 THEN 50
        WHEN 5 THEN 129
        WHEN 8 THEN 92
    END)
WHERE
    id IN (3 , 5, 8);

COMMIT;

ALTER TABLE student.personal ADD email VARCHAR(50) ;
ALTER TABLE student.personal MODIFY email VARCHAR(50) AFTER name ;
ALTER TABLE student.personal MODIFY email INT(10);
ALTER TABLE student.personal ADD UNIQUE(email) ;
ALTER TABLE student.personal CHANGE name NAME varchar(50)  ;
ALTER TABLE student.personal DROP COLUMN EMAIL ;
ALTER TABLE student.personal_1 RENAME personal ;
ALTER TABLE student.coursename AUTO_INCREMENT = 11 ;

COMMIT;


SELECT 
    *
FROM
    student.personal;
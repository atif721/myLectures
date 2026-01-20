SELECT * FROM student_info WHERE percentage < 90;

CREATE INDEX studpercen ON student_info(percentage);

SHOW INDEX FROM student_info;

DROP INDEX studpercen ON student_info;
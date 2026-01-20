SELECT curdate() AS DATE;
SELECT sysdate() AS DATE;
SELECT DATE("2024-8-15 03:55:22") AS DATE;
SELECT MONTH("2024-8-15 03:55:22") AS DATE;
SELECT MONTHNAME("2024-8-15 03:55:22") AS DATE;
SELECT year("2024-8-15 03:55:22") AS DATE;
SELECT quarter("2024-12-21 03:55:22") AS DATE;
SELECT day("2024-12-21 03:55:22") AS DATE;
SELECT dayofmonth("2024-12-21 03:55:22") AS DATE;
SELECT dayname("2024-12-21 03:55:22") AS DATE;
SELECT dayofweek("2024-12-21 03:55:22") AS DATE;
SELECT dayofyear("2024-12-21 03:55:22") AS DATE;
SELECT week("2024-2-21 03:55:22") AS DATE;
SELECT last_day("2024-2-21 03:55:22") AS DATE;
SELECT extract(hour_minute from "2024-5-21 03:55:22") AS DATE;
SELECT date_add("2024-06-20",interval 1300 minute) AS DATE;

SELECT makedate(2023, 21) as Date;
SELECT subdate("2024-06-20", interval 1 month ) as Date; 
SELECT datediff("2004-12-21", "2002-01-28") as Date; 
SELECT to_days("2024-12-21") as Date; 
SELECT from_days("2032232") as Date; 
SELECT period_diff("548464","2032232") as Date; 
SELECT date_format("2002-01-28 02:45:58:98", "%d-%c-%Y, %W, %h:%i") as DATE;
SELECT str_to_date("January 28 2002", "%M %d %Y") as DATE;


SELECT id, name, BD, month(BD) AS YEAR FROM student.personal; 

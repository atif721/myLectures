SELECT id, ucase(name) AS NAME, percentage FROM student.student_info ; 
SELECT id, lcase(name) AS NAME, percentage FROM student.student_info ;  
SELECT id, name, char_length(name) AS "Char Length" FROM student.student_info ; 
SELECT id, concat(name, " - " , percentage) AS "Name - Percentage" FROM student.student_info ;  
SELECT concat("Yahoo ", "Baba ", "Youtube ", "Channel") AS NAME;
SELECT concat_ws(" - ", "Baba ", "Youtube ", "Channel") AS NAME;
SELECT trim("               Yahoo Baba                ") AS NAME;
SELECT position("BABA" IN "Yahoo Baba") AS NAME;
SELECT instr("Yahoo Baba", "hoo") AS NAME;
SELECT locate("a", "Yahoo Baba Baba", 3) AS NAME;
SELECT substr("Yahoo Baba Baba", 3, 6) AS NAME;
SELECT mid("Yahoo Baba Baba", 3, 6) AS NAME;
SELECT substring_index("www.yahoobaba.net","a",1) AS NAME;
SELECT left("yahoobaba",5) AS NAME;
SELECT right("yahoo baba",5) AS NAME;
SELECT rpad(" yahoo baba ",20,"abc") AS NAME;
SELECT lpad(" yahoo baba ",20,"abc") AS NAME;
SELECT space(100) AS NAME;
SELECT reverse("green") AS NAME;
SELECT replace("Yahoo Baba Baba", "Baba", "Woow") AS NAME;
SELECT strcmp("Yahoo Baba", "Yahoo Baba") AS NAME;
SELECT field("Atif", "Jannat", "Nishat", "Sabbir", "Atif") AS NAME;
SELECT find_in_set("Atif", "Jannat,Nishat,Sabbir,Atif") AS NAME;
SELECT format(255.6941,3) AS Value;
SELECT hex("Moon Lover") AS Value;

COMMIT;





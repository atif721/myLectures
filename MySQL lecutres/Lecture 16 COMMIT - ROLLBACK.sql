SELECT * FROM personal_2;

UPDATE personal_2 SET dept = "CSE" WHERE id = 3;
COMMIT;
UPDATE personal_2 SET dept = "BBA" WHERE id = 4;
ROLLBACK;
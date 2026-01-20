# SubQuery clause

SELECT name FROM personal_4
WHERE course IN (SELECT CrID FROM coursename WHERE CrName IN ("CSE","BSS")); # IN will replace "=" 

# EXITS

SELECT name FROM personal_4
WHERE NOT EXISTS (SELECT CrID FROM coursename WHERE CrName IN ("CS")); 
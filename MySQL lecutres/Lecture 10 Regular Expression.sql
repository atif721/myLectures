select * from personal 
where name regexp "^so|if|uz$";




/*
Sign -- Pattern -- Description
 
^ -- '^ra' -- Beginning of string
$ -- 'an$' -- End of string
[...] -- '[rms]' -- Any character listed between the square brackets
^[] -- '^[rms]' -- Begins with Any character listed between the square brackets
'[a-z]' -- '[a-h]e' -- Match with in the range
p1|p2|p3 -- 'tom I dick I harry' -- matches any of the patterns pl, p2, or p3

*/
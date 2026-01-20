
select * from personal where binary name like "A%" or binary name like "S%";
select * from personal where phone like "%20";
select * from personal where name like "__b%";


/* LIKE OPERATOR PATTERNS
like 'a%' - Start with "a"
like '%a' - End with "a"
like '%am%' - Have "am" in any position
like 'a%m' - Start with "a" and Ends with "m"
like '_a%' - "a" in the second position
like '__a%' - "a" in the third position
like '_oy' - "o" in the second postion and "y" in the third position

use binary for exact search
*/
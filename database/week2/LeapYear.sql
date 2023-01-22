-- Wei Xiao
-- 8821418
-- check the leap years
-- For instance: year % 4 = 0, this year is the leap year.
-- First we need to create a table years

create table years(
this_year int
);

-- Second we create a function to check the this_year user inserted if it is leap year. 
-- When the number module 4 and the remainder is the 0, so this number is the leap year.
CREATE DEFINER=`root`@`localhost` FUNCTION `check_leap_year`(this_year int) RETURNS char(20) CHARSET utf8mb4
BEGIN
	declare leap_year char(20);
	if this_year % 4 = 0 then
     set leap_year = 'It is leap year';
    else 
     set leap_year = 'It is not leap_year';
	end if;
RETURN leap_year;
END

-- test 
insert into years(1998),(1991),(2000);
select check_leap_year(this_year),this_year from years;

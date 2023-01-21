use test;
-- OmDev_8830279

DROP TABLE doctor;
CREATE TABLE Doctor ( Doc_id varchar(7), Doc_name varchar(100), Doc_phone numeric(10), Speciality varchar(30), Department varchar(50), Salary_$ int(10), primary key (Doc_id) );
INSERT INTO Doctor values ('DOC01', 'Jeff Edvard', 2029145766, 'Gynecologic oncology', 'gynecology', 200000);
INSERT INTO Doctor values ('DOC02', 'Nikki Jaycocks', 8659104432 , 'Reproductive endocrinologists and infertility', 'gynecology', 500000);
INSERT INTO Doctor values ('DOC03', 'Shelby Burrell', 9293335348 , 'Ocular oncology', 'Ophthalmology', 1000000);
INSERT INTO Doctor values ('DOC04', 'Andros Lourenco', 7556608228 , 'Dermatopathology', 'Dermatology', 1500000);
INSERT INTO Doctor values ('DOC05', 'Becca Giacopetti', 9798132278 , 'Pediatric dermatology', 'Dermatology', 300000);
INSERT INTO Doctor values ('DOC06', 'Kelsey Christie', 8193650233, 'Procedural dermatology', 'Dermatology', 2500000);
INSERT INTO Doctor values ('DOC07', 'Violante Gerrietz', 6289981818 , 'Breast imaging', 'Diagnostic radiology', 300000);
INSERT INTO Doctor values ('DOC08', 'Klaus Maric', 8888010328 , 'Cardiothoracic radiology', 'Diagnostic radiology', 5000000);

SELECT  *
FROM doctor;
-- String Processing Functions*************************************************************
SELECT  CONCAT_WS("*",Doc_id,Doc_name)
FROM doctor;

SELECT  CONCAT(Doc_id," ",Doc_name)
FROM doctor;

SELECT  LTRIM(CONCAT("          ",Doc_name,"         "))
FROM doctor;

SELECT  RTRIM(CONCAT("          ",Doc_name,"         "))
FROM doctor;

SELECT  TRIM(CONCAT("          ",Doc_name,"         "))
FROM doctor;

SELECT  LENGTH(Doc_name)
FROM doctor;

SELECT  Doc_name
       ,LOCATE("a",Doc_name)
FROM doctor;

SELECT  Doc_name
       ,LEFT(Doc_name,3)
FROM doctor;

SELECT  Doc_name
       ,RIGHT(Doc_name,4)
FROM doctor;

SELECT  Doc_phone
       ,SUBSTRING_INDEX(Doc_phone,"3",2)
FROM doctor;

SELECT  SUBSTRING(Doc_name,2,5)
FROM doctor;

SELECT  REPLACE(Doc_name,"a","*")
FROM doctor;

SELECT  INSERT(Doc_name,1,4,"Random")
FROM doctor;

SELECT  REVERSE(Doc_name)
FROM doctor;

SELECT  LOWER(Doc_name)
FROM doctor;

SELECT  UPPER(Doc_name)
FROM doctor;

SELECT  RPAD(Doc_name,30,"_")
FROM doctor;

SELECT  LPAD(Doc_name,30,"*")
FROM doctor;

SELECT  SPACE(5)
FROM doctor;

SELECT  REPEAT(concat(Doc_name," "),5)
FROM doctor;


-- Numeric Functions*****************************************************
SELECT  ROUND(Salary_$+0.565465,3)
FROM doctor;

SELECT  TRUNCATE(Salary_$+0.565465 ,2)
FROM doctor;

SELECT  CEILING(Salary_$+0.565465 )
FROM doctor;

SELECT  FLOOR(Salary_$+0.565465 )
FROM doctor;

SELECT  ABS((Salary_$+0.5654658)*-1 )
FROM doctor;

SELECT  SIGN(Salary_$ )
       ,sign(-1)
       ,sign(0)
FROM doctor;

SELECT  SQRT(Salary_$ )
FROM doctor;

SELECT  POWER(Salary_$ ,2)
FROM doctor;

SELECT  RAND(Salary_$)
FROM doctor;

-- Data AND Time Functions*************************************
SELECT  NOW();

SELECT  SYSDATE();

SELECT  CURRENT_TIMESTAMP();

SELECT  CURDATE();

SELECT  CURRENT_DATE();

SELECT  CURTIME();

SELECT  CURRENT_TIME();

SELECT  DATEDIFF("2017-06-25","2017-06-15");

SELECT  UTC_DATE();

SELECT  UTC_TIME();
-- date/time parsing functions******************************************************
SELECT  DAYOFMONTH(CURDATE());

SELECT  MONTH(CURDATE());

SELECT  YEAR(CURDATE());

SELECT  HOUR(CURDATE());

SELECT  MINUTE(CURDATE());

SELECT  SECOND(CURDATE());

SELECT  DAYOFWEEK(CURDATE());

SELECT  QUARTER(CURDATE());

SELECT  DAYOFYEAR(CURDATE());

SELECT  WEEK(CURDATE());

SELECT  LAST_DAY(CURDATE());

SELECT  DAYNAME(CURDATE());

SELECT  MONTHNAME(CURDATE());


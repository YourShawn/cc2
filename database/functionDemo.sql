show databases;

select *,lpad(doctor_name,15,"*") as calculation from doctor;

select *,concat(doctor_name,"111") as calculation from doctor;


select *,concat("22",doctor_name,"111") as calculation from doctor;

select *,ltrim(lpad(doctor_name,10," ")) as calculation from doctor;

select *, locate("i",doctor_name,3) as calculation from doctor;

select *,left(doctor_name,2) as calculation from doctor;

select *,round(111.117,2) as calculation from doctor;

select truncate(111.117,2) as calculation from doctor;

select ceiling(111.0) as calculation from doctor;

select ceiling(111.1) as calculation, floor(111.9) as calculation1 from doctor;


select ceiling(111.1) as calculation, floor(111.9) as calculation1 from doctor;

select sqrt(111.1) as calculation1 from doctor;

select power(111.1,2) as calculation1 from doctor;






















create table dept_emp (
emp_no INT UNSIGNED NOT NULL,
dept_no CHAR(4) NOT NULL,
from_date DATE NOT NULL,
to_date DATE NOT NULL,
PRIMARY KEY (emp_no, dept_no) -- Index built automatically
);

describe dept_emp;

show index from dept_emp;


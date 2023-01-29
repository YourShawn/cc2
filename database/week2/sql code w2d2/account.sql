CREATE TABLE account (acct_num INT, amount DECIMAL(10,2));
--
CREATE TRIGGER ins_sum BEFORE INSERT ON account
       FOR EACH ROW SET @sum = @sum + NEW.amount;
       
       create trigger ins_sum before insert on account
       for each row set @sum = @sum + NEW.amount;

--

SET @sum = 0;
INSERT INTO account VALUES(137,14.98),(141,1937.50),(97,-100.00);
SELECT @sum AS 'Total amount inserted';
insert into account value(1,52.48);
insert into account value (2,-4.96);

select 14.98 + 1937.5 -100;

--
CREATE TRIGGER ins_transaction BEFORE INSERT ON account
       FOR EACH ROW PRECEDES ins_sum
       SET
       @deposits = @deposits + IF(NEW.amount>0,NEW.amount,0),
       @withdrawals = @withdrawals + IF(NEW.amount<0,-NEW.amount,0);
       
create trigger ins_transaction before insert on account
for each row precedes ins_sum
set @deposit = @deposit + if(NEW.amount > 0 , new.amount, 0),
@withdrawals = @withdrawals + if(new.amount < 0, -new.amount, 0);

set @deposit = 1900;
set @withdrawals = 0;

insert into account value(2, -10);
select @sum as 'xxx';
select @deposit as 'deposit';
select @withdrawals as 'Withdrawals';
--
delimiter //
CREATE TRIGGER upd_check BEFORE UPDATE ON account
       FOR EACH ROW
       BEGIN
           IF NEW.amount < 0 THEN
               SET NEW.amount = 0;
           ELSEIF NEW.amount > 100 THEN
               SET NEW.amount = 100;
           END IF;
       END;//
delimiter ;
--
update account
set amount=200 where acct_num=97;
--
-- DROP TRIGGER test.ins_sum;
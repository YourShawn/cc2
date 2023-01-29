-- Wei Xiao
-- 8821418

-- First the last digit number of my student number is 8, so I will increase the tax rate with 8%.
-- I find the data that state' name started letter is A, then calculate the data.
-- Finally, update the data on the table sales_tax_rate

CREATE DEFINER=`root`@`localhost` PROCEDURE `tax_increase_wei`()
BEGIN
	update sales_tax_rate 
    set tax_rate = tax_rate + tax_rate * 0.08 
    where state like "A%";
END
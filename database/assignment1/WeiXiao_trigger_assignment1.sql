-- Wei Xiao
-- 8821418

-- Get the new data of inserted data
-- Second upper the letters of new data
-- Set the value to the new data after upper.

drop trigger capt_wei;
create trigger capt_wei before insert on geo_provinces_ca
for each row
    set new.iso = upper(new.iso);

    
  
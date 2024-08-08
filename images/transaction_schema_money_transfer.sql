BEGIN TRANSACTION;

UPDATE accounts
SET balance = balance -amount
WHERE account_id = @from_account_id

UPDATE accounts
SET balance = balance + amount
WHERE account_id = @to_account_id

COMMIT;
-- Custom SQL migration file, put your code below! --
UPDATE "subscibers" SET "email" = "email_address" WHERE "email" IS NULL;
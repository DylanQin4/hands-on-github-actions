-- Custom SQL migration file, put your code below! --
UPDATE "subscribers" SET "email" = "email_address" WHERE "email" IS NULL;
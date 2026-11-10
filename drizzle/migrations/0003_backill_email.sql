-- Custom SQL migration file, put your code below! --
UPDATES "subscibers" SET "email" = "email_address" WHERE "email" IS NULL;
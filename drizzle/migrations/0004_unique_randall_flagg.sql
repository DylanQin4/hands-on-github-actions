ALTER TABLE "subscribers" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "subscribers" ADD CONSTRAINT "subscribers_email_unique" UNIQUE("email");
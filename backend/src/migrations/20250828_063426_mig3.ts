import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "clients" ALTER COLUMN "phone" DROP NOT NULL;
  ALTER TABLE "client_collections" ALTER COLUMN "membership_id" DROP NOT NULL;
  ALTER TABLE "withdrawal_requests" ALTER COLUMN "membership_id" DROP NOT NULL;
  ALTER TABLE "users" ADD COLUMN "code" varchar;
  ALTER TABLE "clients" ADD COLUMN "user_id" varchar;
  ALTER TABLE "clients" ADD CONSTRAINT "clients_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  CREATE UNIQUE INDEX "users_code_idx" ON "users" USING btree ("code");
  CREATE INDEX "clients_user_idx" ON "clients" USING btree ("user_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "clients" DROP CONSTRAINT "clients_user_id_users_id_fk";
  
  DROP INDEX "users_code_idx";
  DROP INDEX "clients_user_idx";
  ALTER TABLE "clients" ALTER COLUMN "phone" SET NOT NULL;
  ALTER TABLE "client_collections" ALTER COLUMN "membership_id" SET NOT NULL;
  ALTER TABLE "withdrawal_requests" ALTER COLUMN "membership_id" SET NOT NULL;
  ALTER TABLE "users" DROP COLUMN "code";
  ALTER TABLE "clients" DROP COLUMN "user_id";`)
}

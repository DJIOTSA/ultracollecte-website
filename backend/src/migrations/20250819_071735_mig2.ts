import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_memberships_role" ADD VALUE 'coordinator';
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "admins_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  ALTER TABLE "media" ADD COLUMN "prefix" varchar DEFAULT 'media/ultracollecte';
  ALTER TABLE "clients" ADD COLUMN "photo_id" integer;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "admins_sessions" ADD CONSTRAINT "admins_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "admins_sessions_order_idx" ON "admins_sessions" USING btree ("_order");
  CREATE INDEX "admins_sessions_parent_id_idx" ON "admins_sessions" USING btree ("_parent_id");
  ALTER TABLE "clients" ADD CONSTRAINT "clients_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "clients_photo_idx" ON "clients" USING btree ("photo_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "users_sessions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "admins_sessions" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "admins_sessions" CASCADE;
  ALTER TABLE "clients" DROP CONSTRAINT "clients_photo_id_media_id_fk";
  
  ALTER TABLE "memberships" ALTER COLUMN "role" SET DATA TYPE text;
  ALTER TABLE "memberships" ALTER COLUMN "role" SET DEFAULT 'agent'::text;
  DROP TYPE "public"."enum_memberships_role";
  CREATE TYPE "public"."enum_memberships_role" AS ENUM('admin', 'agent', 'user', 'cashier');
  ALTER TABLE "memberships" ALTER COLUMN "role" SET DEFAULT 'agent'::"public"."enum_memberships_role";
  ALTER TABLE "memberships" ALTER COLUMN "role" SET DATA TYPE "public"."enum_memberships_role" USING "role"::"public"."enum_memberships_role";
  DROP INDEX "clients_photo_idx";
  ALTER TABLE "media" DROP COLUMN "prefix";
  ALTER TABLE "clients" DROP COLUMN "photo_id";`)
}

import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_packages_support_type" AS ENUM('standard', '24/7', 'premium');
  ALTER TABLE "packages" ADD COLUMN "agencies_count" numeric DEFAULT 0 NOT NULL;
  ALTER TABLE "packages" ADD COLUMN "agent_localization" boolean DEFAULT false;
  ALTER TABLE "packages" ADD COLUMN "enable_commision" boolean DEFAULT false;
  ALTER TABLE "packages" ADD COLUMN "support_type" "enum_packages_support_type" DEFAULT 'standard';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "packages" DROP COLUMN "agencies_count";
  ALTER TABLE "packages" DROP COLUMN "agent_localization";
  ALTER TABLE "packages" DROP COLUMN "enable_commision";
  ALTER TABLE "packages" DROP COLUMN "support_type";
  DROP TYPE "public"."enum_packages_support_type";`)
}

import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "settings" ADD COLUMN "ms_commission_percentage" numeric DEFAULT 0;
  ALTER TABLE "commission_configs" ADD COLUMN "ms_commission_percentage" numeric DEFAULT 0;
  ALTER TABLE "commissions_commissions" ADD COLUMN "ms_commission_percentage" numeric DEFAULT 0 NOT NULL;
  ALTER TABLE "settings" DROP COLUMN "closing_time";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "settings" ADD COLUMN "closing_time" varchar DEFAULT '23:59';
  ALTER TABLE "settings" DROP COLUMN "ms_commission_percentage";
  ALTER TABLE "commission_configs" DROP COLUMN "ms_commission_percentage";
  ALTER TABLE "commissions_commissions" DROP COLUMN "ms_commission_percentage";`)
}

import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_operation_sessions_status" AS ENUM('open', 'closed');
  CREATE TABLE "operation_sessions" (
  	"id" varchar PRIMARY KEY NOT NULL,
  	"microfinance_id" varchar NOT NULL,
  	"created_by_id" varchar NOT NULL,
  	"agency_id" varchar,
  	"closed_at" timestamp(3) with time zone,
  	"status" "enum_operation_sessions_status" DEFAULT 'open' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DROP INDEX "settings_microfinance_idx";
  ALTER TABLE "settings" ADD COLUMN "agency_id" varchar;
  ALTER TABLE "settings" ADD COLUMN "closing_time" varchar DEFAULT '23:59';
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "operation_sessions_id" varchar;
  ALTER TABLE "operation_sessions" ADD CONSTRAINT "operation_sessions_microfinance_id_microfinances_id_fk" FOREIGN KEY ("microfinance_id") REFERENCES "public"."microfinances"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "operation_sessions" ADD CONSTRAINT "operation_sessions_created_by_id_memberships_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."memberships"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "operation_sessions" ADD CONSTRAINT "operation_sessions_agency_id_agencies_id_fk" FOREIGN KEY ("agency_id") REFERENCES "public"."agencies"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "operation_sessions_microfinance_idx" ON "operation_sessions" USING btree ("microfinance_id");
  CREATE INDEX "operation_sessions_created_by_idx" ON "operation_sessions" USING btree ("created_by_id");
  CREATE INDEX "operation_sessions_agency_idx" ON "operation_sessions" USING btree ("agency_id");
  CREATE INDEX "operation_sessions_updated_at_idx" ON "operation_sessions" USING btree ("updated_at");
  CREATE INDEX "operation_sessions_created_at_idx" ON "operation_sessions" USING btree ("created_at");
  ALTER TABLE "settings" ADD CONSTRAINT "settings_agency_id_agencies_id_fk" FOREIGN KEY ("agency_id") REFERENCES "public"."agencies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_operation_sessions_fk" FOREIGN KEY ("operation_sessions_id") REFERENCES "public"."operation_sessions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "settings_agency_idx" ON "settings" USING btree ("agency_id");
  CREATE INDEX "payload_locked_documents_rels_operation_sessions_id_idx" ON "payload_locked_documents_rels" USING btree ("operation_sessions_id");
  CREATE INDEX "settings_microfinance_idx" ON "settings" USING btree ("microfinance_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "operation_sessions" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "operation_sessions" CASCADE;
  ALTER TABLE "settings" DROP CONSTRAINT "settings_agency_id_agencies_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_operation_sessions_fk";
  
  DROP INDEX "settings_agency_idx";
  DROP INDEX "payload_locked_documents_rels_operation_sessions_id_idx";
  DROP INDEX "settings_microfinance_idx";
  CREATE UNIQUE INDEX "settings_microfinance_idx" ON "settings" USING btree ("microfinance_id");
  ALTER TABLE "settings" DROP COLUMN "agency_id";
  ALTER TABLE "settings" DROP COLUMN "closing_time";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "operation_sessions_id";
  DROP TYPE "public"."enum_operation_sessions_status";`)
}

import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "agencies" (
  	"id" varchar PRIMARY KEY NOT NULL,
  	"microfinance_id" varchar NOT NULL,
  	"name" varchar,
  	"email" varchar NOT NULL,
  	"country" varchar,
  	"city" varchar,
  	"address" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "commission_configs" (
  	"id" varchar PRIMARY KEY NOT NULL,
  	"microfinance_id" varchar NOT NULL,
  	"membership_id" varchar,
  	"agency_id" varchar,
  	"is_enable" boolean DEFAULT true NOT NULL,
  	"commission_percentage" numeric DEFAULT 0 NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "commissions_commissions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"commission_config_id" varchar NOT NULL,
  	"client_collection_id" varchar NOT NULL,
  	"commision_percentage" numeric NOT NULL,
  	"transaction_amount" numeric NOT NULL,
  	"commission_amount" numeric NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "commissions" (
  	"id" varchar PRIMARY KEY NOT NULL,
  	"microfinance_id" varchar NOT NULL,
  	"membership_id" varchar,
  	"agency_id" varchar,
  	"month" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "settings" ADD COLUMN "enable_commision" boolean DEFAULT false;
  ALTER TABLE "settings" ADD COLUMN "commission_percentage" numeric DEFAULT 0;
  ALTER TABLE "memberships" ADD COLUMN "agency_id" varchar;
  ALTER TABLE "clients" ADD COLUMN "agency_id" varchar;
  ALTER TABLE "client_collections" ADD COLUMN "agency_id" varchar;
  ALTER TABLE "daily_settlements" ADD COLUMN "agency_id" varchar;
  ALTER TABLE "withdrawal_requests" ADD COLUMN "agency_id" varchar;
  ALTER TABLE "withdrawal_requests" ADD COLUMN "signature" varchar;
  ALTER TABLE "withdrawal_requests" ADD COLUMN "photo_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "agencies_id" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "commission_configs_id" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "commissions_id" varchar;
  ALTER TABLE "agencies" ADD CONSTRAINT "agencies_microfinance_id_microfinances_id_fk" FOREIGN KEY ("microfinance_id") REFERENCES "public"."microfinances"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "commission_configs" ADD CONSTRAINT "commission_configs_microfinance_id_microfinances_id_fk" FOREIGN KEY ("microfinance_id") REFERENCES "public"."microfinances"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "commission_configs" ADD CONSTRAINT "commission_configs_membership_id_memberships_id_fk" FOREIGN KEY ("membership_id") REFERENCES "public"."memberships"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "commission_configs" ADD CONSTRAINT "commission_configs_agency_id_agencies_id_fk" FOREIGN KEY ("agency_id") REFERENCES "public"."agencies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "commissions_commissions" ADD CONSTRAINT "commissions_commissions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."commissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "commissions" ADD CONSTRAINT "commissions_microfinance_id_microfinances_id_fk" FOREIGN KEY ("microfinance_id") REFERENCES "public"."microfinances"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "commissions" ADD CONSTRAINT "commissions_membership_id_memberships_id_fk" FOREIGN KEY ("membership_id") REFERENCES "public"."memberships"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "commissions" ADD CONSTRAINT "commissions_agency_id_agencies_id_fk" FOREIGN KEY ("agency_id") REFERENCES "public"."agencies"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "agencies_microfinance_idx" ON "agencies" USING btree ("microfinance_id");
  CREATE INDEX "agencies_updated_at_idx" ON "agencies" USING btree ("updated_at");
  CREATE INDEX "agencies_created_at_idx" ON "agencies" USING btree ("created_at");
  CREATE INDEX "commission_configs_microfinance_idx" ON "commission_configs" USING btree ("microfinance_id");
  CREATE INDEX "commission_configs_membership_idx" ON "commission_configs" USING btree ("membership_id");
  CREATE INDEX "commission_configs_agency_idx" ON "commission_configs" USING btree ("agency_id");
  CREATE INDEX "commission_configs_updated_at_idx" ON "commission_configs" USING btree ("updated_at");
  CREATE INDEX "commission_configs_created_at_idx" ON "commission_configs" USING btree ("created_at");
  CREATE INDEX "commissions_commissions_order_idx" ON "commissions_commissions" USING btree ("_order");
  CREATE INDEX "commissions_commissions_parent_id_idx" ON "commissions_commissions" USING btree ("_parent_id");
  CREATE INDEX "commissions_microfinance_idx" ON "commissions" USING btree ("microfinance_id");
  CREATE INDEX "commissions_membership_idx" ON "commissions" USING btree ("membership_id");
  CREATE INDEX "commissions_agency_idx" ON "commissions" USING btree ("agency_id");
  CREATE INDEX "commissions_updated_at_idx" ON "commissions" USING btree ("updated_at");
  CREATE INDEX "commissions_created_at_idx" ON "commissions" USING btree ("created_at");
  ALTER TABLE "memberships" ADD CONSTRAINT "memberships_agency_id_agencies_id_fk" FOREIGN KEY ("agency_id") REFERENCES "public"."agencies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "clients" ADD CONSTRAINT "clients_agency_id_agencies_id_fk" FOREIGN KEY ("agency_id") REFERENCES "public"."agencies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "client_collections" ADD CONSTRAINT "client_collections_agency_id_agencies_id_fk" FOREIGN KEY ("agency_id") REFERENCES "public"."agencies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "daily_settlements" ADD CONSTRAINT "daily_settlements_agency_id_agencies_id_fk" FOREIGN KEY ("agency_id") REFERENCES "public"."agencies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "withdrawal_requests" ADD CONSTRAINT "withdrawal_requests_agency_id_agencies_id_fk" FOREIGN KEY ("agency_id") REFERENCES "public"."agencies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "withdrawal_requests" ADD CONSTRAINT "withdrawal_requests_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_agencies_fk" FOREIGN KEY ("agencies_id") REFERENCES "public"."agencies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_commission_configs_fk" FOREIGN KEY ("commission_configs_id") REFERENCES "public"."commission_configs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_commissions_fk" FOREIGN KEY ("commissions_id") REFERENCES "public"."commissions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "memberships_agency_idx" ON "memberships" USING btree ("agency_id");
  CREATE INDEX "clients_agency_idx" ON "clients" USING btree ("agency_id");
  CREATE INDEX "client_collections_agency_idx" ON "client_collections" USING btree ("agency_id");
  CREATE INDEX "daily_settlements_agency_idx" ON "daily_settlements" USING btree ("agency_id");
  CREATE INDEX "withdrawal_requests_agency_idx" ON "withdrawal_requests" USING btree ("agency_id");
  CREATE INDEX "withdrawal_requests_photo_idx" ON "withdrawal_requests" USING btree ("photo_id");
  CREATE INDEX "payload_locked_documents_rels_agencies_id_idx" ON "payload_locked_documents_rels" USING btree ("agencies_id");
  CREATE INDEX "payload_locked_documents_rels_commission_configs_id_idx" ON "payload_locked_documents_rels" USING btree ("commission_configs_id");
  CREATE INDEX "payload_locked_documents_rels_commissions_id_idx" ON "payload_locked_documents_rels" USING btree ("commissions_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "agencies" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "commission_configs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "commissions_commissions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "commissions" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "agencies" CASCADE;
  DROP TABLE "commission_configs" CASCADE;
  DROP TABLE "commissions_commissions" CASCADE;
  DROP TABLE "commissions" CASCADE;
  ALTER TABLE "memberships" DROP CONSTRAINT "memberships_agency_id_agencies_id_fk";
  
  ALTER TABLE "clients" DROP CONSTRAINT "clients_agency_id_agencies_id_fk";
  
  ALTER TABLE "client_collections" DROP CONSTRAINT "client_collections_agency_id_agencies_id_fk";
  
  ALTER TABLE "daily_settlements" DROP CONSTRAINT "daily_settlements_agency_id_agencies_id_fk";
  
  ALTER TABLE "withdrawal_requests" DROP CONSTRAINT "withdrawal_requests_agency_id_agencies_id_fk";
  
  ALTER TABLE "withdrawal_requests" DROP CONSTRAINT "withdrawal_requests_photo_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_agencies_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_commission_configs_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_commissions_fk";
  
  DROP INDEX "memberships_agency_idx";
  DROP INDEX "clients_agency_idx";
  DROP INDEX "client_collections_agency_idx";
  DROP INDEX "daily_settlements_agency_idx";
  DROP INDEX "withdrawal_requests_agency_idx";
  DROP INDEX "withdrawal_requests_photo_idx";
  DROP INDEX "payload_locked_documents_rels_agencies_id_idx";
  DROP INDEX "payload_locked_documents_rels_commission_configs_id_idx";
  DROP INDEX "payload_locked_documents_rels_commissions_id_idx";
  ALTER TABLE "settings" DROP COLUMN "enable_commision";
  ALTER TABLE "settings" DROP COLUMN "commission_percentage";
  ALTER TABLE "memberships" DROP COLUMN "agency_id";
  ALTER TABLE "clients" DROP COLUMN "agency_id";
  ALTER TABLE "client_collections" DROP COLUMN "agency_id";
  ALTER TABLE "daily_settlements" DROP COLUMN "agency_id";
  ALTER TABLE "withdrawal_requests" DROP COLUMN "agency_id";
  ALTER TABLE "withdrawal_requests" DROP COLUMN "signature";
  ALTER TABLE "withdrawal_requests" DROP COLUMN "photo_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "agencies_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "commission_configs_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "commissions_id";`)
}

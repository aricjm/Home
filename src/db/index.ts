import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Check for DATABASE_URL in environment
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn("⚠️ DATABASE_URL is not defined in environment variables. Database features will fail until database is provisioned.");
}

const sql = neon(connectionString || "postgres://placeholder:placeholder@localhost:5432/placeholder");
export const db = drizzle(sql, { schema });
export * from "./schema";

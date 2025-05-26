import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  createdAt: integer("created", { mode: "timestamp_ms" }).default(
    sql`(STRFTIME('%s', 'now') * 1000)`,
  ),
});

export const games = sqliteTable("games", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  description: text("description"),
  slug: text("slug").unique(),
  createdAt: integer("created", { mode: "timestamp_ms" }).default(
    sql`(STRFTIME('%s', 'now') * 1000)`,
  ),
});

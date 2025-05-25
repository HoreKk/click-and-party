import type { Config } from "drizzle-kit";

const config: Config = {
  schema: "./drizzle/schema.ts",
  out: ".drizzle-out",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
};

export default config satisfies Config;

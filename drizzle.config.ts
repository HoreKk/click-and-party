import type { Config } from "drizzle-kit";

const config: Config = {
  schema: "./drizzle/schema.ts",
  out: ".drizzle-out",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
};

export default config satisfies Config;

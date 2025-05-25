import { drizzle } from "drizzle-orm/d1";
import { users } from "../../drizzle/schema";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  test: publicProcedure.query(async ({ ctx }) => {
    const db = drizzle(ctx.env.DB);
    // Example query using Drizzle ORM
    const result = await db.select().from(users).limit(1);
    console.log("Query result:", result);
    return "Hello from tRPC!";
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

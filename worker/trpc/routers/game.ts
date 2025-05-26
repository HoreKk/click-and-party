import { drizzle } from "drizzle-orm/d1";
import { games } from "../../../drizzle/schema";
import { publicProcedure, router } from "../trpc";

export const gameRouter = router({
  getList: publicProcedure.query(async ({ ctx }) => {
    const db = drizzle(ctx.env.DB);
    const gameList = await db.select().from(games);
    return gameList;
  }),
});

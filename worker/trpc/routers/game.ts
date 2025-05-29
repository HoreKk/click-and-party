import { drizzle } from "drizzle-orm/d1";
import { z } from "zod/v4";
import { games } from "../../../drizzle/schema";
import { publicProcedure, router } from "../trpc";

export const gameRouter = router({
  getList: publicProcedure
    .input(
      z.object({
        page: z.number().optional(),
        numberPerPage: z.number().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { page = 1, numberPerPage = 10 } = input;
      const db = drizzle(ctx.env.DB);
      const gameList = await db
        .select()
        .from(games)
        .limit(numberPerPage)
        .offset((page - 1) * numberPerPage);
      return gameList;
    }),
});

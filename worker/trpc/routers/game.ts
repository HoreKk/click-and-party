import { drizzle } from "drizzle-orm/d1";
import { games } from "../../../drizzle/schema";
import { publicProcedure, router } from "../trpc";

export const gameRouter = router({
  getList: publicProcedure.query(async ({ ctx }) => {
    const db = drizzle(ctx.env.DB);
    const gameList = await db.select().from(games);
    return gameList;
  }),

  // create: publicProcedure
  //   .input(
  //     z.object({
  //       name: z.string().min(1, "Name is required"),
  //       description: z.string().optional(),
  //     }),
  //   )
  //   .mutation(async ({ input, ctx }) => {
  //     const db = drizzle(ctx.env.DB);
  //     const newGame = {
  //       name: input.name,
  //       description: input.description,
  //       slug: input.name.toLowerCase().replace(/\s+/g, "-"),
  //     };

  //     await db.insert(games).values(newGame);
  //     return newGame;
  //   }),
});

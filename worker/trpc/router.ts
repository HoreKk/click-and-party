import { gameRouter } from "./routers/game";
import { router } from "./trpc";

export const appRouter = router({
  games: gameRouter,
});

export type AppRouter = typeof appRouter;

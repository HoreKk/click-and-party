import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { app } from "./hono/api";
import { createContext } from "./trpc/context";
import { appRouter } from "./trpc/router";

export default {
  fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api")) {
      return fetchRequestHandler({
        endpoint: "/api",
        req: request,
        router: appRouter,
        createContext: () =>
          createContext({ req: request, env: env, workerCtx: ctx }),
      });
    }

    return app.fetch(request, env, ctx);
  },
} satisfies ExportedHandler<Env>;

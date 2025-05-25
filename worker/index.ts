import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "./trpc/context";
import { appRouter } from "./trpc/router";

export default {
  async fetch(request, env, ctx) {
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

    return new Response("Not Found", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });
  },
} satisfies ExportedHandler<Env>;

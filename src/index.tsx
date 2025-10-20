import { serve } from "bun";
import z from "zod";

import index from "./index.html";

const schema = z.object({
  email: z.email({ error: "Nieprawidłowy adres e-mail" }),
  domain: z.url().optional(),
  nickname: z.string().max(0, { error: "Spam" }).optional(),
});

const GAS_URL = process.env.APP_SCRIPT;

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/subscribe": {
      async POST(req) {
        if (!GAS_URL)
          return Response.json(
            {
              success: false,
              message: "Skrypt aplikacji nie jest skonfigurowany.",
            },
            { status: 500 }
          );

        const form = await req.formData();
        const result = schema.safeParse({
          email: form.get("email"),
          domain: form.get("domain"),
          nickname: form.get("nickname"),
        });

        if (!result.success)
          return Response.json(
            {
              success: false,
              errors: z.flattenError(result.error).fieldErrors,
            },
            { status: 400 }
          );

        const { email, domain } = result.data;

        const out = new FormData();
        out.append("email", email);
        out.append("domain", domain ?? "");

        try {
          const res = await fetch(GAS_URL, {
            method: "POST",
            body: out,
            headers: {
              Accept: "multipart/form-data",
            },
          });

          if (!res.ok)
            return Response.json(
              {
                success: false,
                message: "Wystąpił błąd. Proszę spróbuj ponownie później.",
              },
              { status: res.status }
            );

          return Response.json({
            success: true,
            message: "Dziękujemy za zapisanie się!",
          });
        } catch {
          return Response.json(
            {
              success: false,
              message: "Wystąpił błąd. Proszę spróbuj ponownie później.",
            },
            { status: 500 }
          );
        }
      },
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);

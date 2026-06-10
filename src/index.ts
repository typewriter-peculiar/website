import { homeHtml } from "./pages/home";
import { instructHtml, handleChat } from "./pages/instruct";
import { blogHtml } from "./pages/blog";

export interface Env {
  VLLM_URL: string;
  VLLM_API_KEY?: string;
  VLLM_MODEL: string;
  ASSETS: Fetcher;
}

function htmlResponse(body: string): Response {
  return new Response(body, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      return htmlResponse(homeHtml);
    }

    if (request.method === "GET" && url.pathname === "/instruct") {
      return htmlResponse(instructHtml);
    }

    if (request.method === "GET" && url.pathname === "/blog") {
      return htmlResponse(blogHtml);
    }

    if (request.method === "POST" && url.pathname === "/api/chat") {
      return handleChat(request, env);
    }

    return new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;

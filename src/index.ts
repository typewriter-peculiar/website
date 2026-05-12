export default {
  async fetch(): Promise<Response> {
    return new Response("hi", {
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
} satisfies ExportedHandler;

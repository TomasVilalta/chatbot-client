import { RemoteRunnable } from "@langchain/core/runnables/remote";
import { LangChainAdapter, type Message } from "ai";

const langserveUrl = process.env.LANGSERVE_URL || "http://localhost:8000";

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: Message[] };
  const latestUserMessage =
    messages.filter((m) => m.role === "user").pop()?.content || "";
  console.log("Sending to LangServe:", { input: latestUserMessage });

  const remoteChain = new RemoteRunnable({
    url: `${langserveUrl}/promtior-chat`,
  });

  try {
    // Pass the input as an object with the input property
    const stream = await remoteChain.stream(latestUserMessage);

    // Convert the stream to the format expected by the adapter
    return LangChainAdapter.toDataStreamResponse(
      stream as unknown as ReadableStream<string>
    );
  } catch (error) {
    console.error("Error calling LangServe:", error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

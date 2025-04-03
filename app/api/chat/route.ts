// app/api/chat/route.ts
import { openai } from "@ai-sdk/openai";
import { smoothStream, streamText } from "ai";

// For a complete implementation, you would need these files:
import { sopAssistantPromptHeader, sopAssistantPromptBody } from "@/lib/prompts";
import { sopDocument } from "@/app/finance-pr/lib/finance-pr-SOP";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// In a complete implementation, this would use the actual documents
const systemPrompt = `${sopAssistantPromptHeader}\n\n${sopDocument}\n\n${sopAssistantPromptBody}`

export async function POST(req: Request) {
  const { messages, context } = await req.json();

  // Include context in the system prompt if available
  let finalSystemPrompt = systemPrompt;
  if (context?.title) {
    finalSystemPrompt += `\nThe user is currently on the "${context.title}" step of the tutorial.`;
  }

  const model = openai("gpt-4o");

  const result = await streamText({
    model: model,
    // Optional: Add a system prompt
    system: finalSystemPrompt,
    messages: messages, // Pass the conversation history
    experimental_transform: smoothStream()
  });
  // Respond with the stream
  return result.toDataStreamResponse();
}

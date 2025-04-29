"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";

// UI Components & Utils (Import necessary components like Button, Sheet, Card, Input, Icons, cn, parseLLMOutput)
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import {
  MessageSquare,
  Send,
  Loader2,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { parseLLMOutput } from "@/utils/llmUtils";

interface ChatSheetProps {
  moduleTitle: string;
  currentStep: { path: string; title: string } | undefined;
}

export function ChatSheet({ moduleTitle, currentStep }: ChatSheetProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    setMessages,
  } = useChat({
    api: "/api/chat",
    body: {
      context: {
        pathname: currentStep?.path,
        title: currentStep?.title,
      },
    },
  });
  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (messagesEndRef.current) {
      const messagesContainer = messagesEndRef.current.parentElement;
      if (!messagesContainer) return;

      const isNearBottom =
        messagesContainer.scrollHeight -
        messagesContainer.scrollTop -
        messagesContainer.clientHeight <
        100;

      if (isNearBottom) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [messages]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const startNewChat = () => {
    setMessages([]);
  };

  return (
    <>
      {/* Chat Trigger Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="icon"
        aria-label="Open Chat"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat Sheet */}
      <Sheet open={isChatOpen} onOpenChange={setIsChatOpen}>
        <SheetContent 
          className="w-full sm:max-w-md p-0 mt-8 mb-8 mr-6 border rounded-xl shadow-xl flex flex-col transition-all duration-100" 
          style={{ height: 'calc(100vh - 4rem)' }}>
          <Card className="h-full flex flex-col rounded-xl overflow-hidden border-0 shadow-none">
            <CardHeader className="border-b px-4 py-3">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-lg font-semibold">
                  {`${moduleTitle} Assistant`}
                </SheetTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={startNewChat}
                  title="New Chat"
                  disabled={isLoading}
                  className="flex items-center gap-1"
                >
                  <Plus className="h-4 w-4" />
                  <span>New Chat</span>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0 flex-grow overflow-hidden">
              <div className="h-full overflow-y-auto p-4 space-y-4">
                {/* Message display logic */}
                {messages.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-center text-muted-foreground">
                    <div>
                      <MessageSquare className="h-10 w-10 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">
                      Ask me anything about the {moduleTitle} process.
                      </p>
                    </div>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex",
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        {parseLLMOutput(message.content)}
                      </div>
                    </div>
                  ))
                )}

                {/* Loading indicator */}
                {isLoading && messages.length > 0 && (
                  <div className="flex justify-start">
                    <div className="flex items-center space-x-2 max-w-[85%] rounded-lg px-3 py-2 bg-muted text-sm">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>

            <CardFooter className="p-4 border-t mt-auto">
              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex w-full space-x-2 items-center"
              >
                <Input
                  name="prompt"
                  value={input}
                  onChange={handleInputChange}
                  placeholder={`Ask about the ${moduleTitle} process...`}
                  className="flex-1 h-10"
                  disabled={isLoading}
                  aria-label="Chat input"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-10 w-10"
                  disabled={isLoading || !input.trim()}
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </form>
            </CardFooter>
          </Card>
        </SheetContent>
      </Sheet>
    </>
  );
} 
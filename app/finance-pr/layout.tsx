"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { useChat } from "@ai-sdk/react"

// UI Components
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Send,
  Loader2,
  RefreshCw,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { parseLLMOutput } from "@/utils/llmUtils"
const tutorialSteps = [
  { path: "/finance-pr/introduction", title: "Introduction" },
  { path: "/finance-pr/step-1", title: "When to Start" },
  { path: "/finance-pr/step-2", title: "Planning & Preparation" },
  { path: "/finance-pr/step-3", title: "Execution" },
  { path: "/finance-pr/step-4", title: "Approval Process" },
  { path: "/finance-pr/step-5", title: "After Approval" },
  { path: "/finance-pr/deviations", title: "Handling Deviations" },
  { path: "/finance-pr/quiz", title: "Knowledge Check" },
  { path: "/finance-pr/completion", title: "Completion" },
  { path: "/finance-pr/resources", title: "Resources" },
]

export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const currentIndex = tutorialSteps.findIndex((step) => step.path === pathname)
  const currentStep = tutorialSteps[currentIndex]

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
  })
  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    if (messagesEndRef.current) {
      const messagesContainer = messagesEndRef.current.parentElement;
      if (!messagesContainer) return;
      
      // Check if user is already at the bottom or very close to it (within 100px)
      const isNearBottom = 
        messagesContainer.scrollHeight - messagesContainer.scrollTop - messagesContainer.clientHeight < 100;
      
      // Only scroll if user is already near the bottom
      if (isNearBottom) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [messages])

  useEffect(() => {
    if (currentIndex >= 0) {
      setProgress(((currentIndex + 1) / tutorialSteps.length) * 100)
    } else {
      setProgress(0)
    }
  }, [pathname, currentIndex])

  const goToNextStep = () => {
    if (currentIndex < tutorialSteps.length - 1) {
      router.push(tutorialSteps[currentIndex + 1].path)
    }
  }

  const goToPreviousStep = () => {
    if (currentIndex > 0) {
      router.push(tutorialSteps[currentIndex - 1].path)
    }
  }

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  const startNewChat = () => {
    setMessages([])
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            {currentStep
              ? `Step ${currentIndex + 1} of ${tutorialSteps.length}: ${currentStep.title}`
              : "Tutorial Progress"}
          </span>
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
            <h3 className="font-medium text-lg mb-4">Tutorial Steps</h3>
            <ul className="space-y-2">
              {tutorialSteps.map((step, index) => (
                <li key={step.path}>
                  <Link href={step.path}>
                    <Button
                      variant={pathname === step.path ? "default" : "ghost"}
                      className="w-full justify-start text-left whitespace-normal h-auto py-2"
                    >
                      <span className="mr-2 shrink-0">{index + 1}.</span>
                      <span className="line-clamp-2">{step.title}</span>
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">{children}</div>

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={goToPreviousStep}
              disabled={currentIndex <= 0}
              className="flex items-center"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button
              onClick={goToNextStep}
              disabled={currentIndex === tutorialSteps.length - 1}
              className="flex items-center"
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="icon"
        aria-label="Open Chat"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      <Sheet open={isChatOpen} onOpenChange={setIsChatOpen}>
        <SheetContent className="w-full sm:max-w-md p-0 border-l flex flex-col">
          <Card className="h-full flex flex-col rounded-none border-0 shadow-none">
            <CardHeader className="border-b px-4 py-3">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-lg font-semibold">
                  {currentStep
                    ? `Ask about: ${currentStep.title}`
                    : "Chat Assistant"}
                </SheetTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={startNewChat}
                  title="New Chat"
                  disabled={isLoading}
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0 flex-grow overflow-hidden">
              <div className="h-full overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-center text-muted-foreground">
                    <div>
                      <MessageSquare className="h-10 w-10 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">
                        Ask a question about
                        {currentStep ? ` ${currentStep.title}` : " the current step"}
                        .
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
                          : "justify-start",
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted",
                        )}
                      >
                        {parseLLMOutput(message.content)}
                      </div>
                    </div>
                  ))
                )}

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
              <form
                onSubmit={handleSubmit}
                className="flex w-full space-x-2 items-center"
              >
                <Input
                  name="prompt"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about this step..."
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
    </div>
  )
}


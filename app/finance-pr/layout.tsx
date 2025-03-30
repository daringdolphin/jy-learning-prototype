"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

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

  const currentIndex = tutorialSteps.findIndex((step) => step.path === pathname)

  useEffect(() => {
    const currentIndex = tutorialSteps.findIndex((step) => step.path === pathname)
    if (currentIndex >= 0) {
      setProgress(((currentIndex + 1) / tutorialSteps.length) * 100)
    }
  }, [pathname])

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

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            Step {currentIndex + 1} of {tutorialSteps.length}
          </span>
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Sidebar navigation */}
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

        {/* Main content */}
        <div className="col-span-12 md:col-span-9">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">{children}</div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={goToPreviousStep}
              disabled={currentIndex === 0}
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
    </div>
  )
}


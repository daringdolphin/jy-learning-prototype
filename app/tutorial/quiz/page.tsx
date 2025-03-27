"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Trophy } from "lucide-react"

type Question = {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    id: 1,
    question: "When should the PR process be initiated before an event?",
    options: ["7 days", "14 days", "30 days", "60 days"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "How many quotations are required for a budgeted event with an amount greater than $500?",
    options: ["One quotation", "Two quotations", "Three quotations", "No quotation required"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Who verifies the PR before submission?",
    options: ["Requester", "Centre Manager", "Executive Director", "Finance Manager"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "Which of the following roles cannot be a PR requester?",
    options: ["Administrative Staff", "Program Coordinator", "Centre Manager", "Volunteer"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "For non-budgeted items more than $2000, who needs to approve the PR?",
    options: ["Only Executive Director", "4 Directors", "All Board Members", "Finance Manager"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "What should you do after receiving approval for your PR?",
    options: [
      "Wait for the vendor to contact you",
      "Email the signed quotation to the vendor",
      "Start looking for new vendors",
      "Submit a new PR",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "How many working days should the approval process by all parties be completed within?",
    options: ["3 days", "5 days", "7 days", "10 days"],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "What should you do if you need to change details of a purchase after PR approval?",
    options: [
      "Make the changes directly on the approved PR",
      "Cancel the PR and start over",
      "Issue a superseding PR and reference the old PR number",
      "Proceed with the purchase anyway",
    ],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "Who should be CC'd when corresponding with vendors about orders?",
    options: [
      "Only the Centre Manager",
      "Finance Officer and Executive Director",
      "All Board Members",
      "No one needs to be CC'd",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "What is the correct naming format for a PR document in Xodo?",
    options: [
      "PR Number – Event – Vendor",
      "PR Number – Vendor – Event – Event Date – Centre",
      "Vendor – PR Number – Event",
      "Event – PR Number – Vendor",
    ],
    correctAnswer: 1,
  },
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1))
  const [showResults, setShowResults] = useState(false)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleAnswerSelection = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
    
    // Check if answer is correct and show feedback
    const correct = answerIndex === questions[currentQuestion].correctAnswer
    setIsCorrect(correct)
    setHasAnswered(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score
    }, 0)
  }

  const score = calculateScore()
  const percentage = Math.round((score / questions.length) * 100)

  const getExplanation = (questionId: number) => {
    switch (questionId) {
      case 1:
        return "The PR process should be initiated at least 30 days before the event to allow sufficient time for approvals and processing."
      case 2:
        return "For budgeted events with amounts greater than $500, three quotations are required to ensure competitive pricing."
      case 3:
        return "The Centre Manager verifies the PR before it is submitted for approval by the Executive Director."
      case 4:
        return "The Finance Manager, Centre Manager, and Executive Director cannot be PR requesters to maintain separation of duties."
      case 5:
        return "For non-budgeted items more than $2000, all Board Members need to approve the PR due to the significant financial commitment."
      case 6:
        return "After receiving approval, you should email the signed quotation to the vendor to confirm the order."
      case 7:
        return "The approval process by all parties should be completed within 5 working days to ensure timely processing."
      case 8:
        return "If you need to change details after approval, you must issue a superseding PR and reference the old PR number in the new PR and control listing."
      case 9:
        return "When corresponding with vendors, you should CC the Finance Officer and Executive Director to keep them informed."
      case 10:
        return "The correct format is PR Number – Vendor – Event – Event Date – Centre, which provides all necessary information for identification."
      default:
        return ""
    }
  }

  if (showResults) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Knowledge Check Results</h1>

        <Card className="mt-6">
          <CardHeader className="text-center">
            <CardTitle className="flex justify-center items-center text-2xl">
              <Trophy className="mr-2 h-6 w-6 text-yellow-500" />
              Your Score: {score} / {questions.length}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-slate-200 rounded-full h-4 mb-6">
              <div
                className={`h-4 rounded-full ${percentage >= 70 ? "bg-green-500" : "bg-amber-500"}`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            <div className="space-y-4">
              {questions.map((q, index) => (
                <div key={q.id} className="border rounded-lg p-4">
                  <div className="flex items-start">
                    {selectedAnswers[index] === q.correctAnswer ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">{q.question}</p>
                      <p className="mt-1">
                        Your answer:{" "}
                        <span
                          className={
                            selectedAnswers[index] === q.correctAnswer
                              ? "text-green-600 font-medium"
                              : "text-red-600 font-medium"
                          }
                        >
                          {q.options[selectedAnswers[index]]}
                        </span>
                      </p>
                      {selectedAnswers[index] !== q.correctAnswer && (
                        <p className="mt-1">
                          Correct answer:{" "}
                          <span className="text-green-600 font-medium">{q.options[q.correctAnswer]}</span>
                        </p>
                      )}
                      <p className="mt-2 text-slate-600 text-sm">{getExplanation(q.id)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={() => {
                setCurrentQuestion(0)
                setSelectedAnswers(Array(questions.length).fill(-1))
                setShowResults(false)
              }}
            >
              Retake Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Knowledge Check</h1>

      <p className="text-lg text-slate-700">
        Test your understanding of the PR process with this quiz. Select the best answer for each question.
      </p>

      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <span className="text-sm font-medium">{selectedAnswers.filter((a) => a !== -1).length} answered</span>
      </div>

      {/* Add question navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {questions.map((_, index) => (
          <Button
            key={index}
            variant={currentQuestion === index ? "default" : "outline"}
            size="sm"
            className={`w-10 h-10 p-0 hover:bg-slate-50 ${
              currentQuestion === index ? "bg-slate-100 text-black border-slate-400 border-2 " : ""
            }${
              selectedAnswers[index] !== -1
                ? selectedAnswers[index] === questions[index].correctAnswer
                  ? "border-green-500 border-2"
                  : "border-red-500 border-2"
                : ""
            }`}
            onClick={() => {
              setCurrentQuestion(index)
              setHasAnswered(selectedAnswers[index] !== -1)
              setIsCorrect(selectedAnswers[index] === questions[index].correctAnswer)
            }}
          >
            {index + 1}
          </Button>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{questions[currentQuestion].question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswers[currentQuestion].toString()}
            onValueChange={(value) => handleAnswerSelection(Number.parseInt(value))}
          >
            {questions[currentQuestion].options.map((option, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-2 mb-3 p-2 rounded-lg transition-colors ${
                  hasAnswered && index === selectedAnswers[currentQuestion]
                    ? index === questions[currentQuestion].correctAnswer
                      ? "bg-green-100"
                      : "bg-red-100"
                    : hasAnswered && index === questions[currentQuestion].correctAnswer
                    ? "bg-green-100"
                    : ""
                }`}
              >
                <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={hasAnswered} />
                <Label htmlFor={`option-${index}`} className="cursor-pointer">
                  {option}
                </Label>
                {hasAnswered && index === questions[currentQuestion].correctAnswer && (
                  <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                )}
                {hasAnswered && index === selectedAnswers[currentQuestion] && index !== questions[currentQuestion].correctAnswer && (
                  <XCircle className="h-5 w-5 text-red-500 ml-2" />
                )}
              </div>
            ))}
          </RadioGroup>

          {hasAnswered && (
            <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex items-start">
                {isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                )}
                <div>
                  <p className="font-medium">
                    {isCorrect ? "Correct!" : "Incorrect"}
                  </p>
                  {!isCorrect && (
                    <p className="mt-1">
                      Correct answer:{" "}
                      <span className="text-green-600 font-medium">
                        {questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}
                      </span>
                    </p>
                  )}
                  <p className="mt-2">{getExplanation(questions[currentQuestion].id)}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <Button variant="outline" onClick={() => handlePreviousQuestion()} disabled={currentQuestion === 0}>
              Previous
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button onClick={() => handleNextQuestion()} disabled={!hasAnswered}>
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}


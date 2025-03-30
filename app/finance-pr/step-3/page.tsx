"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Printer, Save, FileText, CheckCircle2 } from "lucide-react"

export default function Step3() {
  const [steps, setSteps] = useState({
    prForm: false,
    printPR: false,
    xodoUpload: false,
  })

  const completeStep = (step: keyof typeof steps) => {
    setSteps((prev) => ({ ...prev, [step]: !prev[step] }))
  }

  const allStepsCompleted = Object.values(steps).every((step) => step)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Step 3: Execution</h1>

      <p className="text-lg text-slate-700">
        Execute the PR process by following these steps.
      </p>

      <div className="bg-slate-50 p-6 rounded-lg border mt-6">
        <h2 className="text-xl font-semibold mb-4">Execution Checklist</h2>

        <div className="space-y-4">
          <div className="flex items-center">
            <Button
              variant={steps.prForm ? "default" : "outline"}
              className="mr-4"
              onClick={() => completeStep("prForm")}
            >
              {steps.prForm ? <CheckCircle2 className="mr-2 h-4 w-4" /> : null}
              {steps.prForm ? "Mark Incomplete" : "Mark Complete"}
            </Button>
            <span className={steps.prForm ? "line-through text-slate-500" : ""}>
              1. Complete PR form
            </span>
          </div>

          <div className="flex items-center">
            <Button
              variant={steps.printPR ? "default" : "outline"}
              className="mr-4"
              onClick={() => completeStep("printPR")}
            >
              {steps.printPR ? <CheckCircle2 className="mr-2 h-4 w-4" /> : null}
              {steps.printPR ? "Mark Incomplete" : "Mark Complete"}
            </Button>
            <span className={steps.printPR ? "line-through text-slate-500" : ""}>2. Save as PDF</span>
          </div>

          <div className="flex items-center">
            <Button
              variant={steps.xodoUpload ? "default" : "outline"}
              className="mr-4"
              onClick={() => completeStep("xodoUpload")}
            >
              {steps.xodoUpload ? <CheckCircle2 className="mr-2 h-4 w-4" /> : null}
              {steps.xodoUpload ? "Mark Incomplete" : "Mark Complete"}
            </Button>
            <span className={steps.xodoUpload ? "line-through text-slate-500" : ""}>
              3. Upload to Xodo
            </span>
          </div>
        </div>

        {allStepsCompleted && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-medium text-green-800 flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5" />
              All steps completed! Ready for approval.
            </p>
          </div>
        )}
      </div>

      <Tabs defaultValue="pr-form" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pr-form">PR Form</TabsTrigger>
          <TabsTrigger value="print">Print PR</TabsTrigger>
          <TabsTrigger value="xodo">Xodo System</TabsTrigger>
        </TabsList>

        <TabsContent value="pr-form" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" /> Form Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Supplier: Full name & address</li>
                <li>PR Details: Number, date, requester</li>
                <li>Centre & Event: Name, type, date</li>
                <li>Items: Description, quantity, price</li>
                <li>Financials: GST, delivery, total</li>
                <li>Purpose & Vendor justification</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="print" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Printer className="mr-2 h-5 w-5" /> PDF Export
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-2">
                <li>File → Print or Ctrl+P</li>
                <li>Select &quot;PDF File&quot;</li>
                <li>Choose &quot;Print Entire Workbook&quot;</li>
                <li>
                  Save as: <code>PR0100 – Vendor – Event</code>
                </li>
              </ol>

              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <h3 className="font-medium mb-2">Note:</h3>
                <p>Centre Manager and Executive Director must verify before proceeding.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="xodo" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Save className="mr-2 h-5 w-5" /> Xodo Upload
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>1. Login</AccordionTrigger>
                  <AccordionContent>
                    <p>Access <span className="font-medium">https://jyaa.eversign.com</span></p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>2. New Document</AccordionTrigger>
                  <AccordionContent>
                    <p>Document → +New Document</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>3. Upload Files</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5">
                      <li>PR form (PDF)</li>
                      <li>Event Plan</li>
                      <li>Quotations</li>
                      <li>Supporting documents</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


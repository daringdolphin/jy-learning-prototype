import { CheckCircle, Clock, AlertCircle, Users, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Introduction() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight">Purchase Requisition Overview</h1>

      <p className="text-lg text-slate-700">
        Welcome to the Purchase Requisition (PR) system. This guide outlines the complete process
        for submitting and processing Purchase Requisitions efficiently while ensuring compliance
        with purchasing guidelines.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Important Timelines</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-blue-500 mr-2" />
            <span><strong>Start PR process:</strong> At least 14 days before event</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-blue-500 mr-2" />
            <span><strong>PRs and invoices due:</strong> 7 working days before event</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-blue-500 mr-2" />
            <span><strong>Approval completion:</strong> Within 5 working days</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Process Overview</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <div>
              <span className="font-medium">Step 1: When to Start</span>
              <p className="text-slate-600">Determine when to initiate a PR and evaluate applicability</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <div>
              <span className="font-medium">Step 2: Complete Pre-Event Form</span>
              <p className="text-slate-600">Fill out the event details, budget, and planning information</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <div>
              <span className="font-medium">Step 3: Planning & Preparation</span>
              <p className="text-slate-600">Prepare PR form, event plan, and vendor quotations</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <div>
              <span className="font-medium">Step 4: Execute</span>
              <p className="text-slate-600">Complete PR form with all required details and documentation</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <div>
              <span className="font-medium">Step 5: Approval via Xodo</span>
              <p className="text-slate-600">Upload documents and route for required approvals</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <div>
              <span className="font-medium">Step 6: Save & Exit</span>
              <p className="text-slate-600">Complete the submission process with proper documentation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Quotation Requirements</h2>
        <div className="space-y-3">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
            <span>Budgeted Events {'>'}$500: <strong>3 quotations required</strong></span>
          </div>
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
            <span>All Non-Budgeted Events: <strong>3 quotations required</strong></span>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Users className="h-5 w-5 mr-3" />
          Key Stakeholders
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <h3 className="font-medium text-sm">Requester</h3>
            <p className="text-xs text-slate-600">Initiates PR and prepares documentation</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-sm">Centre Manager</h3>
            <p className="text-xs text-slate-600">First level verification and approval</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-sm">Executive Director</h3>
            <p className="text-xs text-slate-600">Final approval authority</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-sm">Board of Directors</h3>
            <p className="text-xs text-slate-600">Approves high-value purchases</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-sm">Finance Manager</h3>
            <p className="text-xs text-slate-600">Handles payment and vendor coordination</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Important Considerations</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
            <span>Finance Manager, Centre Manager, and Executive Director cannot be PR requesters</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
            <span>Changes to approved PRs require a new PR with reference to the old PR number</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
            <span>All documentation must be properly maintained in both hard and soft copies</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
            <span>Pre-Event Form must be completed before PR form submission</span>
          </li>
        </ul>
      </div>
    </div>
  )
}


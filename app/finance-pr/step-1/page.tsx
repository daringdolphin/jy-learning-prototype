import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Clock } from "lucide-react"

export default function Step1() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Step 1: When to Start</h1>

      <p className="text-lg text-slate-700">
        Learn when to initiate a Purchase Requisition (PR) and its applicability.
      </p>

      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-5 w-5" /> Timing Requirements
          </CardTitle>
          <CardDescription>Submit PR at least 14 days before event</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Purchase Requisition is triggered when goods/services are needed for budgeted or non-budgeted events.</p>
        </CardContent>
      </Card>

      <Alert variant="destructive" className="mt-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Exceptions</AlertTitle>
        <AlertDescription>
          Not required for purchases under existing contracts.
        </AlertDescription>
      </Alert>

      <h2 className="text-xl font-semibold mt-8">Purchase Requirements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <Card>
          <CardHeader className="bg-green-50 rounded-t-lg py-4">
            <CardTitle>Budgeted Events</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="list-disc pl-5 space-y-1">
              <li>Under $500: One quotation</li>
              <li>Over $500: Three quotations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-amber-50 rounded-t-lg py-4">
            <CardTitle>Non-Budgeted Events</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="list-disc pl-5 space-y-1">
              <li>Three quotations required for all amounts</li>
              <li>Additional approvals may apply</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg mt-6">
        <h3 className="font-medium mb-2">Restrictions:</h3>
        <p>Finance Manager, Centre Manager, and Executive Director cannot submit PRs to maintain control separation.</p>
      </div>
    </div>
  )
}


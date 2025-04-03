import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, FileCheck, ClipboardList, CalendarCheck } from "lucide-react"

export default function Step2() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Step 2: Planning & Preparation</h1>

      <p className="text-lg text-slate-700">
        Prepare the following documents before submitting a PR.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <ClipboardList className="mr-2 h-5 w-5" />
          Required Documents
        </h2>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
          <li>Pre-Event Form</li>
          <li>PR form</li>
          <li>Event Plan List</li>
          <li>Vendor quotation or screenshot with web link</li>
          <li>Supplementary Budget (if applicable)</li>
        </ul>
      </div>

      <Tabs defaultValue="pre-event" className="mt-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pre-event">Pre-Event Form</TabsTrigger>
          <TabsTrigger value="pr-form">PR Form</TabsTrigger>
          <TabsTrigger value="event-plan">Event Plan</TabsTrigger>
          <TabsTrigger value="quotations">Quotations</TabsTrigger>
        </TabsList>

        <TabsContent value="pre-event" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarCheck className="mr-2 h-5 w-5" /> Pre-Event Form Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-4">
                  <div className="border-b pb-2">
                    <h3 className="font-medium">Event Date</h3>
                    <ul className="list-disc pl-5 mt-1 text-sm text-slate-600">
                      <li>Format as DD/MM/YYYY (Day)</li>
                      <li>Example: 24/2/2025 (Monday)</li>
                    </ul>
                  </div>

                  <div className="border-b pb-2">
                    <h3 className="font-medium">Description</h3>
                    <ul className="list-disc pl-5 mt-1 text-sm text-slate-600">
                      <li>Include event name</li>
                      <li>Event objective</li>
                      <li>Cost breakdown</li>
                      <li>Example: 60 pax @ $3.50</li>
                      <li>Event timing</li>
                      <li>Event route</li>
                    </ul>
                  </div>

                  <div className="border-b pb-2">
                    <h3 className="font-medium">Budget Amount</h3>
                    <ul className="list-disc pl-5 mt-1 text-sm text-slate-600">
                      <li>Estimated number of participants</li>
                      <li>Expected income (if any)</li>
                      <li>Total estimated expenditure</li>
                    </ul>
                  </div>

                  <div className="border-b pb-2">
                    <h3 className="font-medium">Plan Amount</h3>
                    <ul className="list-disc pl-5 mt-1 text-sm text-slate-600">
                      <li>Final planned participant count</li>
                      <li>Final cost breakdown</li>
                      <li>Example: $210.00 = 60 pax x $3.50</li>
                    </ul>
                  </div>

                  <div className="border-b pb-2">
                    <h3 className="font-medium">Approval</h3>
                    <ul className="list-disc pl-5 mt-1 text-sm text-slate-600">
                      <li>Requester name</li>
                      <li>Date submitted</li>
                      <li>Leave signature space for approver</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium">Centre</h3>
                    <ul className="list-disc pl-5 mt-1 text-sm text-slate-600">
                      <li>Enter centre code</li>
                      <li>Example: HG 25</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium">Action Required</h3>
                  <p className="text-sm text-slate-600">Save completed form to shared drive and reference it in the PR Form submission.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pr-form" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" /> PR Form Fields
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-2">
                  <h3 className="font-medium">Supplier Details</h3>
                  <ul className="list-disc pl-5 mt-1 text-sm text-slate-600">
                    <li>Full Company Name (e.g., Elsie&apos;s Kitchen Catering Services Pte Ltd)</li>
                    <li>Complete Address</li>
                  </ul>
                </div>

                <div className="border-b pb-2">
                  <h3 className="font-medium">PR Information</h3>
                  <ul className="list-disc pl-5 mt-1 text-sm text-slate-600">
                    <li>PR Number (sequential)</li>
                    <li>Request Date</li>
                    <li>Requester Name</li>
                  </ul>
                </div>

                <div className="border-b pb-2">
                  <h3 className="font-medium">Event Details</h3>
                  <ul className="list-disc pl-5 mt-1 text-sm text-slate-600">
                    <li>Centre (or combined centres)</li>
                    <li>Project Name (if special event)</li>
                    <li>Event Type</li>
                    <li>Event Date</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium">Financial Details</h3>
                  <ul className="list-disc pl-5 mt-1 text-sm text-slate-600">
                    <li>Item Description & Quantity (e.g., Bento with Drinks)</li>
                    <li>Unit Price & Total Amount</li>
                    <li>GST Rate (default 9%)</li>
                    <li>GST Amount</li>
                    <li>Delivery Fee (if any)</li>
                    <li>Total (must match quotation)</li>
                    <li>Purpose (event name)</li>
                    <li>Justification (vendor choice)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quotations" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileCheck className="mr-2 h-5 w-5" /> Quotation Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Quantity & Price</li>
                <li>Event Date & Time</li>
                <li>Item Description</li>
                <li>Delivery Location</li>
                <li>Contact Person</li>
                <li>Ready Time (for food)</li>
                <li>Budget per Person (e.g., $5/pax)</li>
                <li>Entity: Jia Ying Community Services Society</li>
              </ul>

              <div className="bg-amber-50 p-4 rounded-lg mt-6">
                <h3 className="font-medium mb-2">Alternative Documentation</h3>
                <ul className="list-disc pl-5">
                  <li>Screenshot with web link for online items</li>
                  <li>Written quote with quantity, price, total, company name & address</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="event-plan" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ClipboardList className="mr-2 h-5 w-5" /> Event Plan Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Event name & purpose</li>
                <li>Date, time & location</li>
                <li>Expected participants</li>
                <li>Budget breakdown</li>
                <li>Required items/services</li>
                <li>Person in charge</li>
              </ul>

              <div className="mt-6">
                <h3 className="font-medium mb-2">Supplementary Budget</h3>
                <p>Required if additional funding needed beyond original budget.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

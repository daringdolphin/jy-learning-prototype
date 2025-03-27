import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, FileCheck, ClipboardList } from "lucide-react"

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
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>PR form</li>
          <li>Event Plan List</li>
          <li>Vendor quotation or screenshot with web link</li>
          <li>Supplementary Budget (if applicable)</li>
        </ul>
      </div>

      <Tabs defaultValue="pr-form" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pr-form">PR Form</TabsTrigger>
          <TabsTrigger value="event-plan">Event Plan</TabsTrigger>
          <TabsTrigger value="quotations">Quotations</TabsTrigger>
        </TabsList>

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
                    <li>Full Company Name</li>
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
                    <li>Item Description & Quantity</li>
                    <li>Unit Price & Total Amount</li>
                    <li>GST (9% default, 0% if exempt)</li>
                    <li>Delivery Fee (if any)</li>
                    <li>Total (must match quotation)</li>
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
                <li>Budget per Person</li>
                <li>Company: Jia Ying Community Services Society</li>
              </ul>

              <div className="bg-amber-50 p-4 rounded-lg mt-6">
                <h3 className="font-medium mb-2">Alternative Documentation</h3>
                <ul className="list-disc pl-5">
                  <li>Screenshot with web link for online items</li>
                  <li>Written quote with details for small shops</li>
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


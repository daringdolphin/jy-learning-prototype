import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download, FileText, Printer } from "lucide-react"
import Link from "next/link"

export default function Completion() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Congratulations!</h1>
        <p className="text-xl text-slate-600 mt-2">You&apos;ve completed the Purchase Requisition Process Tutorial</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What You&apos;ve Learned</CardTitle>
          <CardDescription>A summary of the key concepts covered in this tutorial</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>When to initiate a Purchase Requisition (30 days before an event)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Required documents for PR submission (PR form, quotations, event plan)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>How to properly fill out the PR form with all required details</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>The approval workflow and thresholds for different purchase types</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Using the Xodo system for document submission and approvals</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Steps to take after PR approval (vendor confirmation, payment, delivery)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>How to handle deviations and special cases in the PR process</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" /> Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Access these resources to help you with the PR process:</p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Button variant="outline" size="sm" className="mr-2">
                  <Download className="h-4 w-4 mr-1" /> PR Form Template
                </Button>
              </li>
              <li className="flex items-center">
                <Button variant="outline" size="sm" className="mr-2">
                  <Download className="h-4 w-4 mr-1" /> Event Plan Template
                </Button>
              </li>
              <li className="flex items-center">
                <Button variant="outline" size="sm" className="mr-2">
                  <Download className="h-4 w-4 mr-1" /> Supplementary Budget Form
                </Button>
              </li>
              <li className="flex items-center">
                <Button variant="outline" size="sm" className="mr-2">
                  <Download className="h-4 w-4 mr-1" /> PR Process Flowchart
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Printer className="mr-2 h-5 w-5" /> Print Certificate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Print your certificate of completion for the Purchase Requisition Process Tutorial.</p>
            <div className="mt-4 p-4 border rounded-lg bg-slate-50 text-center">
              <p className="font-medium">Certificate of Completion</p>
              <p className="mt-2">This certifies that you have successfully completed the</p>
              <p className="font-bold mt-1">Purchase Requisition Process Tutorial</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Printer className="mr-2 h-4 w-4" /> Print Certificate
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/">
          <Button size="lg">Return to Home</Button>
        </Link>
      </div>
    </div>
  )
}


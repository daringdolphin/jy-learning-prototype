import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, HelpCircle, LinkIcon } from "lucide-react"
import Link from "next/link"

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Purchase Requisition Resources</h1>

      <p className="text-lg text-slate-700 mb-8">
        Access helpful resources for the Purchase Requisition process. These templates and guides will help you navigate
        the PR process efficiently.
      </p>

      <Tabs defaultValue="templates" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" /> PR Form
                </CardTitle>
                <CardDescription>The official Purchase Requisition form template</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>
                  Use this template to create a new Purchase Requisition. The form includes all required fields and
                  calculations.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" /> Event Plan List
                </CardTitle>
                <CardDescription>Template for planning event details</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>
                  Use this template to document your event details, including budget, timeline, and required resources.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" /> Supplementary Budget Form
                </CardTitle>
                <CardDescription>For requesting additional budget</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>
                  Use this form when you need to request additional budget for an event or project beyond what was
                  initially allocated.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" /> Quotation Request Template
                </CardTitle>
                <CardDescription>For requesting quotations from vendors</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>
                  Use this template when requesting quotations from vendors to ensure you receive all the necessary
                  information.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Template
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="guides" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" /> PR Process Flowchart
                </CardTitle>
                <CardDescription>Visual guide to the PR process</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>
                  This flowchart provides a visual representation of the entire PR process from initiation to
                  completion.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Flowchart
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" /> Xodo System Guide
                </CardTitle>
                <CardDescription>Step-by-step guide for using Xodo</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>
                  This guide provides detailed instructions for using the Xodo system for document submission and
                  approvals.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Guide
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" /> PR Checklist
                </CardTitle>
                <CardDescription>Ensure you&apos;ve completed all steps</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>
                  Use this checklist to ensure you&apos;ve completed all necessary steps in the PR process before submission.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Checklist
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LinkIcon className="mr-2 h-5 w-5" /> Useful Links
                </CardTitle>
                <CardDescription>Quick access to important resources</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li>
                    <Link href="https://jyaa.eversign.com" className="text-blue-600 hover:underline flex items-center">
                      <LinkIcon className="h-4 w-4 mr-1" /> Xodo System Login
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline flex items-center">
                      <LinkIcon className="h-4 w-4 mr-1" /> Organization Intranet
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline flex items-center">
                      <LinkIcon className="h-4 w-4 mr-1" /> Finance Department Portal
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline flex items-center">
                      <LinkIcon className="h-4 w-4 mr-1" /> Vendor Directory
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="faq" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="mr-2 h-5 w-5" /> Frequently Asked Questions
              </CardTitle>
              <CardDescription>Common questions about the PR process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg">What is the timeline for the PR process?</h3>
                  <p className="text-slate-600 mt-1">
                    The PR should be submitted 30 days before the event. The approval process should be completed within
                    5 working days. All approved PR and invoices must be sent to the Finance Officer 7 working days
                    before the event to process the payment.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">How many quotations do I need?</h3>
                  <p className="text-slate-600 mt-1">
                    For budgeted events with amounts less than $500, one quotation is sufficient. For budgeted events
                    with amounts greater than $500 and all non-budgeted events, three quotations are required.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">What if I need to change something after PR approval?</h3>
                  <p className="text-slate-600 mt-1">
                    Once a PR is approved, do not cancel or change any item in the PR. If you need to change the details
                    of the purchase item, you must issue a superseding PR and state the old PR number in the new PR and
                    control listing.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Who can be a PR requester?</h3>
                  <p className="text-slate-600 mt-1">
                    Most staff members can be PR requesters. However, the Finance Officer, Centre Manager, and Executive
                    Director are not allowed to issue Purchase Requisitions or Supplementary Budgets.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">What if a vendor cannot provide a formal quotation?</h3>
                  <p className="text-slate-600 mt-1">
                    If unable to get a formal quotation, you must provide a proper screenshot from the internet with the
                    web link. For small shops without formal quotations, get a written quotation with quantity, price,
                    total amount, and company details.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">What happens if someone in the approval chain is absent?</h3>
                  <p className="text-slate-600 mt-1">
                    If the Centre Manager is absent, the Executive Director can verify the PR. If the Executive Director
                    is absent, the Vice President or President can approve the PR.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-slate-500">
                If your question isn&apos;t answered here, please contact the Finance Manager for assistance.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold mb-4">Need more help?</h2>
        <p className="mb-6">Return to the tutorial or contact the Finance Department for assistance.</p>
        <div className="flex justify-center gap-4">
          <Link href="/tutorial/introduction">
            <Button variant="outline">Return to Tutorial</Button>
          </Link>
          <Button>Contact Finance Department</Button>
        </div>
      </div>
    </div>
  )
}


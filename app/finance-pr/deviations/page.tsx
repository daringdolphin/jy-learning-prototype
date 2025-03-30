import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertTriangle, HelpCircle } from "lucide-react"

export default function Deviations() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Handling Deviations</h1>

      <p className="text-lg text-slate-700">
        Sometimes, the PR process may not go exactly as planned. This section covers common deviations and how to handle
        them properly.
      </p>

      <Alert variant="destructive" className="mt-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          When in doubt and need clarification, contact the Finance Manager for guidance.
        </AlertDescription>
      </Alert>

      <Accordion type="single" collapsible className="w-full mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
              Quotation Issues
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">If you&apos;re unable to get a formal quotation, you must:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">For online purchases:</span>
                    <p className="text-slate-600 mt-1">
                      Take a proper screenshot from the website and copy the web link to attach to your PR.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">For small shops without formal quotations:</span>
                    <p className="text-slate-600 mt-1">
                      Get a written quotation that includes quantity, price, total amount, and company name with
                      address.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
              PR Form Changes
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <span className="font-medium">PR must be approved before purchase confirmation</span>
                    <p className="text-slate-600 mt-1">
                      Never confirm an order with a vendor before the PR is fully approved.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">No changes after approval</span>
                    <p className="text-slate-600 mt-1">
                      Once a PR is approved, do not cancel or change any item in the PR.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Cancellation procedure</span>
                    <p className="text-slate-600 mt-1">
                      If you need to cancel a Purchase Requisition, you must state the reason for cancellation in the
                      Control Listing.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Changes to purchase details</span>
                    <p className="text-slate-600 mt-1">
                      If you need to change the details of the purchase item, you must issue a superseding PR and state
                      the old PR number in the new PR and control listing.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
              Requester Restrictions
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">Certain roles are restricted from issuing PRs:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Finance Officer, Centre Manager & Executive Director</span>
                    <p className="text-slate-600 mt-1">
                      These roles are not allowed to issue Purchase Requisition & Supplementary Budget.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Special PR cases</span>
                    <p className="text-slate-600 mt-1">
                      Special PR will be issued by Centre Manager and verified by Executive Director and approved by
                      Vice President or President.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
              Xodo System Issues
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">If you encounter issues with the Xodo system:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Changes after submission</span>
                    <p className="text-slate-600 mt-1">
                      If you need to make changes after submitting in Xodo, contact the Finance Manager for guidance on
                      how to proceed.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">System downtime</span>
                    <p className="text-slate-600 mt-1">
                      If the Xodo system is down, use email to circulate documents for approval and update the system
                      once it&apos;s available again.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
              Approval Absences
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">In case of absences in the approval chain:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Centre Manager absence</span>
                    <p className="text-slate-600 mt-1">
                      If the Centre Manager is absent, the Executive Director can verify the PR.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Executive Director absence</span>
                    <p className="text-slate-600 mt-1">
                      If the Executive Director is absent, the Vice President or President can approve the PR.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
              Invoice Issues
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">When dealing with vendors who cannot provide formal invoices:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Hawker stalls or small vendors</span>
                    <p className="text-slate-600 mt-1">
                      If a vendor like a hawker stall is unable to provide an invoice, collect a receipt and document
                      the transaction with photos if necessary.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Alternative documentation</span>
                    <p className="text-slate-600 mt-1">
                      In such cases, prepare a memo explaining the situation and attach all available documentation
                      (receipts, photos, etc.).
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <HelpCircle className="mr-2 h-5 w-5" /> Need Help?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">If you encounter any issues or have questions about the PR process:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Contact the Finance Manager for guidance on financial matters and PR procedures</li>
            <li>Consult with your Centre Manager for clarification on centre-specific requirements</li>
            <li>Refer to this tutorial for step-by-step guidance</li>
            <li>Check the organization&apos;s intranet for updated policies and procedures</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <h3 className="font-medium mb-2">Remember:</h3>
            <p>
              It&apos;s better to ask for clarification before proceeding if you&apos;re unsure about any part of the PR process.
              This helps prevent errors and delays.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ShoppingCart, Truck, Receipt, CreditCard } from "lucide-react"

export default function Step5() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Step 5: After Approval</h1>

      <p className="text-lg text-slate-700">
        Follow these steps after PR approval.
      </p>

      <Tabs defaultValue="confirm-order" className="mt-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="confirm-order">Order</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="delivery">Delivery</TabsTrigger>
          <TabsTrigger value="documentation">Records</TabsTrigger>
        </TabsList>

        <TabsContent value="confirm-order" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" /> Order Confirmation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <span className="font-medium">Send signed quotation</span>
                  <p className="text-slate-600 mt-1">Email approved quote to vendor</p>
                </li>
                <li>
                  <span className="font-medium">CC required parties</span>
                  <p className="text-slate-600 mt-1">Include Finance Officer and ED</p>
                </li>
                <li>
                  <span className="font-medium">Get invoice</span>
                  <p className="text-slate-600 mt-1">Request invoice for payment processing</p>
                </li>
              </ol>

              <Alert className="mt-6">
                <AlertTitle>Ad-hoc Items</AlertTitle>
                <AlertDescription>
                  Purchase after approval, claim via Paypoy with PR & receipts
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5" /> Payment Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <span className="font-medium">Invoice Processing</span>
                  <p className="text-slate-600 mt-1">Finance processes within 7 working days</p>
                </li>
                <li>
                  <span className="font-medium">Advance Payment</span>
                  <p className="text-slate-600 mt-1">Available if vendor requires</p>
                </li>
                <li>
                  <span className="font-medium">Payment Notice</span>
                  <p className="text-slate-600 mt-1">Finance notifies vendor and CC&apos;s requester</p>
                </li>
              </ol>

              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <h3 className="font-medium mb-2">Deadline:</h3>
                <p>Submit PR and invoice 7 days before event</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivery" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="mr-2 h-5 w-5" /> Receiving Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <span className="font-medium">Check Delivery</span>
                  <p className="text-slate-600 mt-1">Verify quantity and quality</p>
                </li>
                <li>
                  <span className="font-medium">Submit DO</span>
                  <p className="text-slate-600 mt-1">Send Delivery Order to Finance</p>
                </li>
                <li>
                  <span className="font-medium">Invoice</span>
                  <p className="text-slate-600 mt-1">Forward to Finance Manager and ED</p>
                </li>
              </ol>

              <div className="bg-amber-50 p-4 rounded-lg mt-6">
                <h3 className="font-medium mb-2">Special Cases:</h3>
                <p>Document with receipts and photos if no invoice available</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documentation" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Receipt className="mr-2 h-5 w-5" /> Record Keeping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <span className="font-medium">Xodo Processing</span>
                  <p className="text-slate-600 mt-1">Finance Manager prepares payment documents</p>
                </li>
                <li>
                  <span className="font-medium">File Documents</span>
                  <ul className="list-disc pl-5 mt-1 text-slate-600">
                    <li>PR form</li>
                    <li>Quotations</li>
                    <li>Invoices</li>
                    <li>Delivery Orders</li>
                    <li>Payment records</li>
                  </ul>
                </li>
              </ol>

              <div className="flex items-center bg-green-50 p-4 rounded-lg mt-6">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <p className="font-medium">PR process complete!</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


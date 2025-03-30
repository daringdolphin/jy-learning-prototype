import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, AlertTriangle, Users } from "lucide-react"

export default function Step4() {
  const threshold = 2000;
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Step 4: Approval Process</h1>
      
      <p className="text-lg text-slate-700">
        Review the approval workflow and requirements.
      </p>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5" /> Approval Flow
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            
            <div className="space-y-8">
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="font-medium text-lg">Requester</h3>
                <p className="text-slate-600">Initial submission and signature</p>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="font-medium text-lg">Centre Manager</h3>
                <p className="text-slate-600">Verifies PR details and necessity</p>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="font-medium text-lg">Executive Director</h3>
                <p className="text-slate-600">Reviews alignment with goals and budget</p>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="font-medium text-lg">Board Approval</h3>
                <ul className="list-disc pl-5 mt-2 text-slate-600">
                  <li>Budgeted {`>`} $500 or non-budgeted {`<`} ${threshold}: 4 Directors</li>
                  <li>Non-budgeted {`>`} ${threshold}: All Board Members</li>
                </ul>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-medium text-lg">Finance Manager</h3>
                <p className="text-slate-600">CC&apos;d on all PRs</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="mt-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Timeline</AlertTitle>
        <AlertDescription>
          All approvals must be completed within 5 working days.
        </AlertDescription>
      </Alert>

      <h2 className="text-xl font-semibold mt-8">Approval Matrix</h2>
      
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Required Approvals</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Budgeted</TableCell>
            <TableCell>≤ $500</TableCell>
            <TableCell>CM + ED</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Budgeted</TableCell>
            <TableCell>{`>`} $500</TableCell>
            <TableCell>CM + ED + 4 Directors</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Non-Budgeted</TableCell>
            <TableCell>{`<`} ${threshold}</TableCell>
            <TableCell>CM + ED + 4 Directors</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Non-Budgeted</TableCell>
            <TableCell>≥ ${threshold}</TableCell>
            <TableCell>CM + ED + All Board</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
        <h3 className="font-medium mb-2">Backup Approvers</h3>
        <ul className="list-disc pl-5">
          <li>ED can verify if CM absent</li>
          <li>VP/President can approve if ED absent</li>
        </ul>
      </div>
    </div>
  );
}


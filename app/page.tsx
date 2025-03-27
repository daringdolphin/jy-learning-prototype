import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Internal Resources Portal
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            Your one-stop destination for company processes, tutorials, and documentation
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/tutorial/introduction">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-w-md relative group flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-3">Purchase Requisition Tutorial</h3>
                <p className="text-slate-600">
                  Learn how to submit a Purchase Requisition (PR) and navigate the approval process.
                </p>
              </div>
              <ArrowRight className="ml-4 text-slate-300 group-hover:text-slate-400 transition-colors w-5 h-5 flex-shrink-0" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}


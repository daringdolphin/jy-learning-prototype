import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ModuleCardProps {
  title: string
  description: string
  department: string
  href: string
}

export function ModuleCard({ title, description, department, href }: ModuleCardProps) {
  const getBadgeColor = (dept: string) => {
    switch (dept) {
      case "Finance":
        return "bg-blue-100 text-blue-700"
      case "Procurement":
        return "bg-purple-100 text-purple-700"
      case "Operations":
        return "bg-green-100 text-green-700"
      default:
        return "bg-slate-100 text-slate-500"
    }
  }

  return (
    <Link href={href}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-w-md relative group flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-3">{title}</h3>
          <p className="text-slate-600">{description}</p>
          <span className={`inline-block mt-2 text-sm px-2 py-1 rounded ${getBadgeColor(department)}`}>
            {department}
          </span>
        </div>
        <ArrowRight className="ml-4 text-slate-300 group-hover:text-slate-400 transition-colors w-5 h-5 flex-shrink-0" />
      </div>
    </Link>
  )
} 
'use client'

interface DepartmentTabsProps {
  departments: string[]
  activeDepartment: string
  onDepartmentChange: (department: string) => void
}

export function DepartmentTabs({ departments, activeDepartment, onDepartmentChange }: DepartmentTabsProps) {
  return (
    <div className="flex justify-start mb-12">
      <div className="inline-flex rounded-lg border border-slate-200 p-1 bg-white">
        {departments.map((department) => (
          <button
            key={department}
            onClick={() => onDepartmentChange(department)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeDepartment === department
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {department}
          </button>
        ))}
      </div>
    </div>
  )
} 
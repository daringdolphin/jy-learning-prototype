'use client'

import { ModuleCard } from "../components/ModuleCard"
import { DepartmentTabs } from "../components/DepartmentTabs"
import { useState } from "react"
import { departments, modules } from "@/lib/modules"

type DepartmentType = typeof departments[number]

export default function Home() {
  const [activeDepartment, setActiveDepartment] = useState<DepartmentType>("All")

  const filteredModules = activeDepartment === "All" 
    ? modules
    : modules.filter(module => module.department === activeDepartment)

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

        <DepartmentTabs
          departments={[...departments]}
          activeDepartment={activeDepartment}
          onDepartmentChange={(dept: string) => setActiveDepartment(dept as DepartmentType)}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModules.map(module => (
            <ModuleCard
              key={module.id}
              title={module.title}
              description={module.description}
              department={module.department}
              href={module.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


export interface Module {
  id: string;
  title: string;
  description: string;
  department: Department;
  href: string;
}

export type Department = "Finance" | "Procurement" | "Operations";

export const departments = ["All", "Finance", "Procurement", "Operations"] as const;

export const modules: Module[] = [
  {
    id: "finance-pr",
    title: "Purchase Requisition",
    description: "Learn how to submit a Purchase Requisition (PR) and navigate the approval process.",
    department: "Finance",
    href: "/finance-pr/introduction",
  },
  {
    id: "finance-invoice",
    title: "Invoice Processing",
    description: "Steps for invoice receipt, verification, matching with POs, and payment.",
    department: "Finance",
    href: "/modules/finance/invoice-processing",
  },
  {
    id: "finance-expense",
    title: "Expense Reimbursement",
    description: "Procedure for submitting, validating, and reimbursing employee claims.",
    department: "Finance",
    href: "/modules/finance/expense-reimbursement",
  },
  {
    id: "procurement-vendor",
    title: "Vendor Registration",
    description: "Steps to evaluate, approve, and onboard new suppliers.",
    department: "Procurement",
    href: "/modules/procurement/vendor-registration",
  },
  {
    id: "procurement-rfq",
    title: "Request for Quotation",
    description: "Procedure for preparing, sending, and evaluating RFQs from vendors.",
    department: "Procurement",
    href: "/modules/procurement/request-quotation",
  },
  {
    id: "procurement-contract",
    title: "Contract Review & Renewal",
    description: "Timeline and steps for reviewing vendor contracts and initiating renewals.",
    department: "Procurement",
    href: "/modules/procurement/contract-review",
  },
  {
    id: "operations-supplies",
    title: "Office Supplies Request",
    description: "Process for employees to request and receive common office supplies.",
    department: "Operations",
    href: "/modules/operations/office-supplies",
  },
  {
    id: "operations-maintenance",
    title: "Facility Maintenance",
    description: "Workflow for logging and resolving facility or equipment issues.",
    department: "Operations",
    href: "/modules/operations/facility-maintenance",
  },
  {
    id: "operations-visitor",
    title: "Visitor Management",
    description: "Procedures for registering, approving, and tracking office visitors.",
    department: "Operations",
    href: "/modules/operations/visitor-management",
  },
  {
    id: "procurement-inventory",
    title: "Inventory Management",
    description: "Guidelines for tracking, optimizing, and reporting on procurement inventory levels.",
    department: "Procurement",
    href: "/modules/procurement/inventory-management",
  },
  {
    id: "procurement-sourcing",
    title: "Strategic Sourcing",
    description: "Best practices for identifying and evaluating potential suppliers for long-term partnerships.",
    department: "Procurement",
    href: "/modules/procurement/strategic-sourcing",
  },
  {
    id: "operations-fleet",
    title: "Fleet Management",
    description: "Procedures for managing company vehicles, maintenance schedules, and driver assignments.",
    department: "Operations",
    href: "/modules/operations/fleet-management",
  },
];

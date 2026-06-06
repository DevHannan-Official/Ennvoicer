import { IconBarTab } from "@/features/invoice-editor/types/constants"
import {
  Building2,
  FileText,
  List,
  Palette,
  ShieldCheck,
  Users,
} from "lucide-react"

export const ICON_BAR_TABS: IconBarTab[] = [
  { id: "invoice", icon: FileText, label: "Invoice" },
  { id: "business", icon: Building2, label: "Business" },
  { id: "recipient", icon: Users, label: "Recipient" },
  { id: "items", icon: List, label: "Items" },
  { id: "design", icon: Palette, label: "Design" },
  { id: "review", icon: ShieldCheck, label: "Review" },
]

export const INVOICE_STATUSES = [
  { value: "draft", label: "Draft", color: "#94A3B8" },
    { value: "sent", label: "Sent", color: "#3B82F6" },
    { value: "paid", label: "Paid", color: "#22C55E" },
    { value: "overdue", label: "Overdue", color: "#EF4444" },
]

import { IconBarTab } from "@/features/invoice-editor/types/constants"
import {
  List,
  ShieldCheck,
  Users,
  Building2,
  CheckSquare,
  FileText,
  ListChecks,
  Palette,
  UserCircle2,
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

export const SECTION_META = {
  invoice: {
    title: "Invoice Details",
    desc: "Number, dates, currency and status",
    icon: FileText,
  },
  business: {
    title: "Business Info",
    desc: "Your company details and logo",
    icon: Building2,
  },
  recipient: {
    title: "Recipient Info",
    desc: "Client billing information",
    icon: UserCircle2,
  },
  items: {
    title: "Line Items",
    desc: "Services, products and fees",
    icon: ListChecks,
  },
  design: {
    title: "Design Settings",
    desc: "Theme, fonts and layout",
    icon: Palette,
  },
  review: {
    title: "Review & Export",
    desc: "Validate before generating PDF",
    icon: CheckSquare,
  },
}

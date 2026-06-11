import { type LucideIcon } from "lucide-react"

export interface IconBarTab {
  id: string
  label: string
  icon: LucideIcon
}

export type EditorTabs =
  | "invoice"
  | "business"
  | "recipient"
  | "items"
  | "design"
  | "review"


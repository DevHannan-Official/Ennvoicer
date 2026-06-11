import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ReactNode } from "react"

export const Section = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <div className="mt-6 mb-10 space-y-4">
      <Label>{title}</Label>
      <Separator />
      <div>{children}</div>
    </div>
  )
}

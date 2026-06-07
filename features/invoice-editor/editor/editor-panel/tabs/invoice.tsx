import { Button } from "@/components/ui/button"
import { InputField } from "@/features/invoice-editor/editor/editor-panel/components/fields"
import { RefreshCw } from "lucide-react"
import { FieldGroup } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { ToggleGroup } from "@/components/ui/toggle-group"
import { INVOICE_STATUSES } from "@/features/invoice-editor/constants/layout"
import { cn } from "@/lib/utils"

const InvoiceTab = () => {
  const currentStatus = "paid"
  return (
    <>
      <header className="mb-4 border-b border-border pb-4">
        <h3 className="text-lg font-medium">Invoice</h3>
        <p className="text-xs text-muted-foreground">
          Numbers, dates, currency and status
        </p>
      </header>
      <div className="space-y-4">
        <InputField label="Invoice Title" placeholder="Untitled" />
        <InputField label="Invoice Number" placeholder="e.g. INV-001">
          <Button size="icon" variant="outline">
            <RefreshCw />
          </Button>
        </InputField>
        <FieldGroup className="">
          <InputField
            label="Invoice Date"
            placeholder="e.g. 2024-01-01"
            type="date"
          />
          <InputField
            label="Due Date"
            placeholder="e.g. 2024-01-15"
            type="date"
          />
        </FieldGroup>
        <FieldGroup>
          <InputField label="Currency" placeholder="e.g. $, €, £" />
          <InputField label="Payment Terms" placeholder="e.g. Net 30, Net 60" />
        </FieldGroup>
        <div>
          <Label className="mb-2">Status</Label>
          <ToggleGroup type="single" className="w-full" defaultValue="draft">
            {INVOICE_STATUSES.map((status) => {
              const isActive = currentStatus === status.value
              return (
                <Button
                  key={status.value}
                  variant="outline"
                  className="justify-start gap-1.5"
                  style={
                    isActive
                      ? {
                          backgroundColor: `${status.color}18`,
                          borderColor: status.color,
                        }
                      : undefined
                  }
                >
                  <div
                    className="size-2 rounded-full"
                    style={{ backgroundColor: status.color }}
                  />
                  {status.label}
                </Button>
              )
            })}
          </ToggleGroup>
        </div>
      </div>
    </>
  )
}

export default InvoiceTab

import { Button } from "@/components/ui/button"
import { FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { LineItem } from "@/features/invoice-editor/types/invoice"
import { ChevronDown, ChevronUp, Copy, Plus, Trash2 } from "lucide-react"
import TabHeader from "../components/tab-header"
import { SECTION_META } from "@/features/invoice-editor/constants/layout"

interface itemCardData {
  item: LineItem
  index: number
}
const ItemCard = ({ item, index }: itemCardData) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-input p-3">
      <div className="flex items-center justify-between">
        <Label>Item {index + 1}</Label>
        <div className="flex items-center gap-0.5">
          <Button variant={"ghost"} title="Move up" size={"icon-sm"}>
            <ChevronUp size={13} />
          </Button>

          <Button variant="ghost" title="Move down" size={"icon-sm"}>
            <ChevronDown size={13} />
          </Button>

          <Button variant={"ghost"} title="Duplicate" size={"icon-sm"}>
            <Copy size={13} />
          </Button>
          <Button variant={"destructive"} title="Remove" size={"icon-sm"}>
            <Trash2 size={13} />
          </Button>
        </div>
      </div>

      <Input
        value={item.description}
        placeholder="Description of service or product"
        className="bg-card"
      />

      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col gap-1">
          <FieldLabel>Qty</FieldLabel>
          <Input
            type="number"
            value={item.quantity}
            min={0}
            step={1}
            className="bg-card"
          />
        </div>
        <div className="flex flex-col gap-1">
          <FieldLabel>Price</FieldLabel>
          <Input
            type="number"
            value={item.unitPrice}
            min={0}
            step={0.01}
            className="bg-card"
          />
        </div>
        <div className="flex flex-col gap-1">
          <FieldLabel>Disc %</FieldLabel>
          <Input
            type="number"
            value={item.discount}
            min={0}
            max={100}
            step={1}
            className="bg-card"
          />
        </div>
        <div className="flex flex-col gap-1">
          <FieldLabel>Tax %</FieldLabel>
          <Input
            type="number"
            value={item.taxRate}
            min={0}
            max={100}
            step={0.1}
            className="bg-card"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <span>
          ${" "}
          {item.quantity * item.unitPrice +
            (item.taxRate % (item.quantity * item.unitPrice)) -
            (item.discount % (item.quantity * item.unitPrice))}
        </span>
      </div>
    </div>
  )
}

const ItemsTab = () => {
  const items: LineItem[] = [
    {
      id: "1b1",
      description: "Sample Item",
      quantity: 2,
      unitPrice: 250,
      discount: 0,
      taxRate: 2,
    },
  ]
  return (
    <>
      <TabHeader meta={SECTION_META.items} />
      <div className="space-y-4">
        {items.map((item, idx) => (
          <ItemCard item={item} key={idx} index={idx} />
        ))}
        <Button variant="outline" className="w-full border-dashed">
          <Plus /> Add Item
        </Button>

        {items.length > 0 && (
          <div className="flex w-full flex-col gap-2 rounded-lg border bg-input p-4">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Subtotal</span>
              <span>$150</span>
            </div>

            <div className="flex justify-between text-xs">
              <span>Tax</span>
              <span>$5</span>
            </div>

            <Separator />
            <div className="flex justify-between text-sm font-medium">
              <span>Total</span>
              <span>$200</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ItemsTab

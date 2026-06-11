import { SECTION_META } from "@/features/invoice-editor/constants/layout"
import { cn } from "@/lib/utils"

const TabHeader = ({
  meta,
  className,
}: {
  meta: typeof SECTION_META.invoice
  className?: string
}) => {
  return (
    <div
      className={cn(
        "bg-[rgba(255, 255, 255, 0.02)] mb-4 flex shrink-0 items-end gap-4 border-b pb-4",
        className
      )}
    >
      <div className="flex size-10 items-center justify-center rounded-lg border bg-input">
        <meta.icon size={18} strokeWidth={2} />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="leading-2.25 font-medium">{meta.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{meta.desc}</p>
      </div>
    </div>
  )
}

export default TabHeader

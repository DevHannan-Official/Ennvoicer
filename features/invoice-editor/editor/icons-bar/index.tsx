import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import { ICON_BAR_TABS } from "@/features/invoice-editor/constants/layout"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const IconsBar = ({ activeTab }: { activeTab: string }) => {
  return (
    <div className="h-full w-20 shrink-0 flex-col items-center justify-center border-r border-sidebar-border bg-sidebar py-4 text-white">
      <Link
        href="/"
        className="mb-4 flex items-center justify-center rounded-md bg-primary p-2"
      >
        <Image
          src="/media/logo.svg"
          width={40}
          height={40}
          alt="Ennvoicer's Logo"
        />
      </Link>
      <Separator className="my-4 bg-sidebar-border" />
      <div className="flex flex-col items-center gap-4">
        {ICON_BAR_TABS.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            className={cn(
              "h-16 w-16 flex-col gap-2 rounded-md border",
              tab.id === activeTab
                ? "border-sidebar-ring bg-sidebar-accent text-sidebar-primary hover:bg-sidebar-accent hover:text-sidebar-primary"
                : "border-transparent text-sidebar-foreground hover:bg-transparent hover:text-white"
            )}
          >
            <tab.icon />
            <span className="text-xs">{tab.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default IconsBar

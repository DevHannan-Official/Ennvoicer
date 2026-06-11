import { ScrollArea } from "@/components/ui/scroll-area"
import { EditorTabs } from "../../types/constants"
import BusinessTab from "./tabs/business"
import DesignTab from "./tabs/design"
import InvoiceTab from "./tabs/invoice"
import ItemsTab from "./tabs/items"
import RecipientTab from "./tabs/recipient"

const EditorPanel = ({ activeTab }: { activeTab: EditorTabs }) => {
  return (
    <div className="flex-1 bg-card p-4">
      <ScrollArea className="h-full w-full">
        {activeTab === "invoice" && <InvoiceTab />}
        {activeTab === "business" && <BusinessTab />}
        {activeTab === "recipient" && <RecipientTab />}
        {activeTab === "items" && <ItemsTab />}
        {activeTab === "design" && <DesignTab />}
        {/* TODO: Refactor to show single header in every tab */}
      </ScrollArea>
    </div>
  )
}

export default EditorPanel

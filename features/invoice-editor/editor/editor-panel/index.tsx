import BusinessTab from "./tabs/business"
import InvoiceTab from "./tabs/invoice"
import ItemsTab from "./tabs/items";
import RecipientTab from "./tabs/recipient"

const EditorPanel = ({ activeTab }: { activeTab: string }) => {
  return (
    <div className="flex-1 bg-card p-4">
      {activeTab === "invoice" && <InvoiceTab />}
      {activeTab === "business" && <BusinessTab />}
      {activeTab === "recipient" && <RecipientTab />}
      {activeTab === "items" && <ItemsTab />}
      {/* TODO: Refactor to show single header in every tab */}
    </div>
  )
}

export default EditorPanel

import BusinessTab from "./tabs/business"
import InvoiceTab from "./tabs/invoice"

const EditorPanel = ({ activeTab }: { activeTab: string }) => {
  return (
    <div className="flex-1 bg-card p-4">
      {activeTab === "invoice" && <InvoiceTab />}
      {activeTab === "business" && <BusinessTab />}
      {/* TODO: Refactor to show single header in every tab */}
    </div>
  )
}

export default EditorPanel

import InvoiceTab from "./tabs/invoice"

const EditorPanel = () => {
  const activeTab = "invoice"

  return (
    <div className="flex-1 bg-card p-4">
      {activeTab === "invoice" && <InvoiceTab />}
    </div>
  )
}

export default EditorPanel

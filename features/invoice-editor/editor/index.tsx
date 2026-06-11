"use client"
import EditorPanel from "./editor-panel"
import IconsBar from "./icons-bar"

const InvoiceEditor = () => {
  const activeTab = "design"

  return (
    <aside className="flex h-full w-110 border-r border-border drop-shadow-md drop-shadow-foreground/5">
      <IconsBar activeTab={activeTab} />
      <EditorPanel activeTab={activeTab} />
    </aside>
  )
}

export default InvoiceEditor

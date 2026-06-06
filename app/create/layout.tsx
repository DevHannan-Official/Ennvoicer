import InvoiceEditor from "@/features/invoice-editor/editor"
import Navbar from "@/features/invoice-editor/navbar"
import { ReactNode } from "react"

export default function NewInvoiceLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <main className="flex h-dvh w-screen">
      <InvoiceEditor />
      <div className="flex flex-1 flex-col">
        <Navbar />
        {children}
      </div>
    </main>
  )
}

import { Input } from "@/components/ui/input"

const OnboardingPage = () => {
  return (
    <div className="min-h-screen w-full bg-input-background">
      <div>
        <h1>Create a new invoice.</h1>
        <p>Beautiful, professional invoices - in minutes.</p>
      </div>
      <div>
        <Input placeholder="Untitled" />
      </div>
    </div>
  )
}

export default OnboardingPage

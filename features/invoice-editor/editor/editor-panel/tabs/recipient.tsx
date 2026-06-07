import { FieldGroup } from "@/components/ui/field"
import { InputField, TextAreaField } from "../components/fields"
import { Separator } from "@/components/ui/separator";

const RecipientTab = () => {
  return (
    <>
      <header className="mb-4 border-b border-border pb-4">
        <h3 className="text-lg font-medium">Recipient</h3>
        <p className="text-xs text-muted-foreground">
          Client Billing Information
        </p>
      </header>
      <div className="space-y-4">
        <FieldGroup>
          <InputField label="Client Name" placeholder="e.g. Jane Smith" />
          <InputField label="Company Name" placeholder="e.g. Client Corp." />
        </FieldGroup>
        <FieldGroup>
          <InputField
            label="Email"
            type="email"
            placeholder="e.g. jane@client.co"
          />
          <InputField
            label="Phone"
            type="tel"
            placeholder="e.g. Client Corp."
          />
        </FieldGroup>
        <TextAreaField
          label="Billing Address"
          placeholder="e.g. 456 Market Street, City, Country"
        />
        <Separator />
        <TextAreaField label="Notes to Client" placeholder="e.g. Payment is due within 30 days. Bank transfer preferred." />
      </div>
    </>
  )
}

export default RecipientTab

import { FieldGroup } from "@/components/ui/field"
import { InputField, TextAreaField } from "../components/fields"
import { Separator } from "@/components/ui/separator"
import TabHeader from "../components/tab-header"
import { SECTION_META } from "@/features/invoice-editor/constants/layout"

const RecipientTab = () => {
  return (
    <>
      <TabHeader meta={SECTION_META.recipient} />
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
        <TextAreaField
          label="Notes to Client"
          placeholder="e.g. Payment is due within 30 days. Bank transfer preferred."
        />
      </div>
    </>
  )
}

export default RecipientTab

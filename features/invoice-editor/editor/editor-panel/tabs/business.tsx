import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImagePlus } from "lucide-react"
import { InputField, TextAreaField } from "../components/fields"
import { Separator } from "@/components/ui/separator"
import TabHeader from "../components/tab-header"
import { SECTION_META } from "@/features/invoice-editor/constants/layout"

const BusinessTab = () => {
  return (
    <>
      <TabHeader meta={SECTION_META.business} />
      <div className="space-y-4">
        <Field>
          <Label>Logo</Label>
          <Button
            asChild
            variant="outline"
            className="w-full cursor-pointer border-dashed px-4 py-6"
            size="lg"
          >
            <FieldLabel
              htmlFor="companyLogo"
              className="justify-start gap-1.5 text-muted-foreground capitalize"
            >
              <ImagePlus /> Upload Logo
            </FieldLabel>
          </Button>
          <Input
            type="file"
            id="companyLogo"
            accept="image/jpeg+png+svg+xml"
            className="hidden!"
          />
        </Field>
        <InputField label="Business Name" placeholder="e.g. Acme Inc." />
        <FieldGroup>
          <InputField label="Email" placeholder="e.g. hello@acme.com" />
          <InputField
            label="Phone"
            placeholder="e.g. (123) 456-7890"
            type="tel"
          />
        </FieldGroup>
        <InputField
          label="Website"
          placeholder="e.g. https://www.acme.com"
          type="url"
        />
        <TextAreaField
          label="Address"
          placeholder="e.g. 123 Main St, City, Country"
        />
        <Separator />
        <FieldGroup>
          <InputField label="Registration No." placeholder="e.g. 12345678" />
          <InputField label="Tax ID / VAT" placeholder="e.g. GB123456789" />
        </FieldGroup>
      </div>
    </>
  )
}

export default BusinessTab

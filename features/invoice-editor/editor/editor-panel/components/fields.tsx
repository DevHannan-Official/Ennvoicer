import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ReactNode } from "react"

interface InputFieldProps {
  children?: ReactNode
  label: string
  placeholder?: string
  type?: string
  disabled?: boolean
  value?: string
  onChange?: (value: string) => void
}
export const InputField = ({
  children,
  label,
  placeholder,
  type = "text",
  disabled,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <Field className="col-span-1 flex flex-col gap-1">
      <FieldLabel className="text-xs font-medium">{label}</FieldLabel>
      <div className="flex items-center gap-2">
        <Input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        {children}
      </div>
    </Field>
  )
}
export const TextAreaField = ({
  children,
  label,
  placeholder,

  disabled,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <Field className="col-span-1 flex flex-col gap-1">
      <FieldLabel className="text-xs font-medium">{label}</FieldLabel>
      <div className="flex items-center gap-2">
        <Textarea
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        {children}
      </div>
    </Field>
  )
}

import {
  ACCENT_PRESETS,
  FONT_FAMILIES,
  SPACING,
  TABLE_STYLES,
  VISIBILITIES,
} from "@/features/invoice-editor/constants/theme"
import { Section } from "../../../components/sections"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { InputField } from "../../../components/fields"

const ColorSection = () => {
  return (
    <Section title="Accent Color">
      <div className="grid grid-cols-6 gap-2">
        {ACCENT_PRESETS.map((color, idx) => (
          <button
            key={color.value}
            className="group flex flex-col items-center justify-center"
          >
            <div
              className={cn(
                "flex size-10 overflow-hidden rounded-full border-2 p-0.5 transition-colors duration-150",
                idx === 0
                  ? "border-primary"
                  : "border-border group-hover:border-primary"
              )}
            >
              <div
                className="flex-1 rounded-full"
                style={{
                  backgroundColor: color.value,
                }}
              />
            </div>
            <span
              className={cn(
                "mt-1 text-[10px]",
                idx === 0 ? "font-medium" : "font-regular"
              )}
            >
              {color.label}
            </span>
          </button>
        ))}
        <button className="flex scale-100 flex-col items-center justify-center transition-transform duration-150 hover:scale-105">
          <div
            className={cn(
              "flex size-10 overflow-hidden rounded-full border-2 border-border p-0.5"
            )}
          >
            <div className="flex flex-1 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <Plus size={16} />
            </div>
          </div>
          <span className="mt-1 text-[10px] font-medium">Custom</span>
        </button>
      </div>
    </Section>
  )
}

const TypographySection = () => {
  return (
    <Section title="Typography">
      <div className="grid grid-cols-2 gap-2">
        {FONT_FAMILIES.map((font) => (
          <Button key={font.value} variant={"radio"} size={"radio"}>
            <span>{font.name}</span>
            <p className="text-xs text-muted-foreground">Aa, Bb, Cc</p>
          </Button>
        ))}
      </div>
    </Section>
  )
}

const TableSection = () => {
  return (
    <Section title="Table Style">
      <div className="grid grid-cols-3 gap-2">
        {TABLE_STYLES.map((style) => (
          <Button
            key={style.value}
            variant={"radio"}
            size={"radio"}
            className="h-20 items-center justify-center text-center"
          >
            <span>{style.name}</span>
            <p className="text-xs text-wrap text-muted-foreground">
              {style.desc}
            </p>
          </Button>
        ))}
      </div>
    </Section>
  )
}

const SpacingSection = () => {
  return (
    <Section title="Spacing">
      <div className="grid grid-cols-3 gap-2">
        {SPACING.map((spacing) => (
          <Button
            key={spacing.value}
            variant={"radio"}
            size={"lg"}
            className="items-center justify-center text-center"
          >
            {spacing.name}
          </Button>
        ))}
      </div>
    </Section>
  )
}

const VisibilitySection = () => {
  return (
    <Section title="visibility">
      <div className="flex flex-col gap-2">
        {VISIBILITIES.map((visibility) => (
          <div
            key={visibility.key}
            className="flex items-center justify-between"
          >
            <span className="font-medium">{visibility.label}</span>
            <Switch defaultChecked />
          </div>
        ))}
      </div>
    </Section>
  )
}

const FooterSection = () => {
  return (
    <Section title="footer">
      <div>
        <InputField
          label="Footer text"
          placeholder="Thanks for your business."
        />
      </div>
    </Section>
  )
}

const SimpleTab = () => {
  return (
    <>
      <ColorSection />
      <TypographySection />
      <TableSection />
      <SpacingSection />
      <VisibilitySection />
      <FooterSection />
    </>
  )
}

export default SimpleTab

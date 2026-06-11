import TabHeader from "../../components/tab-header"
import { SECTION_META } from "@/features/invoice-editor/constants/layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SimpleTab from "./tabs/simple"

const DesignTab = () => {
  return (
    <Tabs defaultValue="simple">
      <TabHeader meta={SECTION_META.design} className="mb-0" />
      <TabsList variant="line" className="sticky top-0 z-50 w-full bg-white">
        <TabsTrigger value="simple">Simple</TabsTrigger>
        <TabsTrigger value="advance">Advance</TabsTrigger>
      </TabsList>
      <TabsContent value="simple">
        <SimpleTab />
      </TabsContent>
    </Tabs>
  )
}

export default DesignTab

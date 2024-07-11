import { CreateTemplate } from "@/components/Templates/Create/CreateTemplate";
import { footerStore } from "@/stores/FooterStore/FooterStore";
import { headerStore } from "@/stores/HeaderStore/HeaderStore";

export const CreateContainer = () => {

  const createTemplateProps: React.ComponentProps<typeof CreateTemplate> = {
    headerModuleProps: headerStore,

    footerModuleProps: footerStore,
  };

  return <CreateTemplate {...createTemplateProps} />;
};

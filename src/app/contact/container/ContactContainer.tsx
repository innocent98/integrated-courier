import { ContactTemplate } from "@/components/Templates/Contact/ContactTemplate";
import { footerStore } from "@/stores/FooterStore/FooterStore";
import { headerStore } from "@/stores/HeaderStore/HeaderStore";

export const ContactContainer = () => {
  const contactTemplateProps: React.ComponentProps<typeof ContactTemplate> = {
    headerModuleProps: headerStore,

    footerModuleProps: footerStore,
  };

  return <ContactTemplate {...contactTemplateProps} />;
};

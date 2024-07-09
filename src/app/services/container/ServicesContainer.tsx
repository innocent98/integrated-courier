import { ServicesTemplate } from "@/components/Templates/Services/ServicesTemplate";
import { footerStore } from "@/stores/FooterStore/FooterStore";
import { headerStore } from "@/stores/HeaderStore/HeaderStore";
import { serviceStore } from "@/stores/ServiceStore/ServiceStore";

export const ServicesContainer = () => {
  const servicesTemplateProps: React.ComponentProps<typeof ServicesTemplate> = {
    headerModuleProps: headerStore,
    serviceModuleProps: serviceStore,
    footerModuleProps: footerStore,
  };

  return <ServicesTemplate {...servicesTemplateProps} />;
};

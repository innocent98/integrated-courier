import { DashboardTemplate } from "@/components/Templates/Dashboard/DashboardTemplate";
import { footerStore } from "@/stores/FooterStore/FooterStore";
import { headerStore } from "@/stores/HeaderStore/HeaderStore";

export const DashboardContainer = () => {

  const dashboardTemplateProps: React.ComponentProps<typeof DashboardTemplate> = {
    headerModuleProps: headerStore,

    footerModuleProps: footerStore,
  };

  return <DashboardTemplate {...dashboardTemplateProps} />;
};

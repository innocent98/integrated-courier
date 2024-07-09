import { TrackTemplate } from "@/components/Templates/Track/TrackTemplate";
import { footerStore } from "@/stores/FooterStore/FooterStore";
import { headerStore } from "@/stores/HeaderStore/HeaderStore";

export const TrackContainer = () => {
  const trackTemplateProps: React.ComponentProps<typeof TrackTemplate> = {
    headerModuleProps: headerStore,

    footerModuleProps: footerStore,
  };

  return <TrackTemplate {...trackTemplateProps} />;
};

import { AboutTemplate } from "@/components/Templates/About/AboutTemplate";
import { counterStore } from "@/stores/CounterStore/CounterStore";
import { courierStore } from "@/stores/CourierStore/CourierStore";
import { footerStore } from "@/stores/FooterStore/FooterStore";
import { headerStore } from "@/stores/HeaderStore/HeaderStore";

export const AboutContainer = () => {
  const testimonialTemplateProps: React.ComponentProps<typeof AboutTemplate> =
    {
      headerModuleProps: headerStore,

      courierModuleProps: courierStore,
      counterModuleProps: counterStore,
  
      footerModuleProps: footerStore,
    };

  return <AboutTemplate {...testimonialTemplateProps} />;
};

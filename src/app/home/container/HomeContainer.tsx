import { HomeTemplate } from "@/components/Templates/Home/HomeTemplate";
import { counterStore } from "@/stores/CounterStore/CounterStore";
import { courierStore } from "@/stores/CourierStore/CourierStore";
import { footerStore } from "@/stores/FooterStore/FooterStore";
import { headerStore } from "@/stores/HeaderStore/HeaderStore";
import { homeStore } from "@/stores/HomeStore/HomeStore";
import { testimonialStore } from "@/stores/TestimonialStore/TestimonialStore";

export const HomeContainer = () => {
  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    headerModuleProps: headerStore,

    homeModuleProps: homeStore,
    courierModuleProps: courierStore,
    counterModuleProps: counterStore,
    testimonialModuleProps: testimonialStore,

    footerModuleProps: footerStore,
  };

  return <HomeTemplate {...homeTemplateProps} />;
};

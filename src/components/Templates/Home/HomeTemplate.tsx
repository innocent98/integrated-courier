import { AwesomeServiceModule } from "@/components/Modules/AwesomeService/AwesomeServiceModule";
import { ContactModule } from "@/components/Modules/Contact/ContactModule";
import { CounterModule } from "@/components/Modules/Counter/CounterModule";
import { CourierServiceModule } from "@/components/Modules/CourierService/CourierServiceModule";
import { FooterModule } from "@/components/Modules/Footer/FooterModule";
import { HeaderModule } from "@/components/Modules/Header/HeaderModule";
import { HomeIntroModule } from "@/components/Modules/Home/HomeIntroModule/HomeIntroModule";
import { HomeIntroServiceModule } from "@/components/Modules/Home/HomeIntroService/HomeIntroServiceModule";
import { TestimonialModule } from "@/components/Modules/Testimonial/TestimonialModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
  homeModuleProps: React.ComponentProps<typeof HomeIntroModule>;
  courierModuleProps: React.ComponentProps<typeof CourierServiceModule>;
  counterModuleProps: React.ComponentProps<typeof CounterModule>;
  testimonialModuleProps: React.ComponentProps<typeof TestimonialModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }} className='overflow-x-hidden'>
      <Header
        style={{ padding: 0 }}
        className='relative flex h-20 w-full bg-white shadow-lg'
      >
        <HeaderModule {...props.headerModuleProps} />
      </Header>

      <Content className='overflow-auto overflow-x-hidden bg-white'>
        <HomeIntroModule {...props.homeModuleProps} />
        <HomeIntroServiceModule {...props.homeModuleProps} />
        <CourierServiceModule {...props.courierModuleProps} />
        <AwesomeServiceModule {...props.homeModuleProps} />
        <CounterModule {...props.counterModuleProps} />
        <TestimonialModule {...props.testimonialModuleProps} />
        <ContactModule />
      </Content>

      <Footer style={{ padding: 0 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};

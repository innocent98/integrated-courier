import { CounterModule } from "@/components/Modules/Counter/CounterModule";
import { CourierServiceModule } from "@/components/Modules/CourierService/CourierServiceModule";
import { FooterModule } from "@/components/Modules/Footer/FooterModule";
import { HeaderModule } from "@/components/Modules/Header/HeaderModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
  courierModuleProps: React.ComponentProps<typeof CourierServiceModule>;
  counterModuleProps: React.ComponentProps<typeof CounterModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const AboutTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }} className='overflow-x-hidden'>
      <Header
        style={{ padding: 0 }}
        className='relative flex h-20 w-full bg-white px-4 shadow-lg sm:px-16 md:px-20 lg:px-12'
      >
        <HeaderModule {...props.headerModuleProps} />
      </Header>

      <Content className='overflow-auto overflow-x-hidden bg-white'>
        <CourierServiceModule {...props.courierModuleProps} />
        <CounterModule {...props.counterModuleProps} />
      </Content>

      <Footer style={{ padding: 0 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};

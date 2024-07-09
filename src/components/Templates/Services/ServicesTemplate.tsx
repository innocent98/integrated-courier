import { FooterModule } from "@/components/Modules/Footer/FooterModule";
import { HeaderModule } from "@/components/Modules/Header/HeaderModule";
import { ServicesModule } from "@/components/Modules/Services/ServicesModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
  serviceModuleProps: React.ComponentProps<typeof ServicesModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const ServicesTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }} className='overflow-x-hidden'>
      <Header
        style={{ padding: 0 }}
        className='relative flex h-20 w-full bg-white px-4 shadow-lg sm:px-16 md:px-20 lg:px-12'
      >
        <HeaderModule {...props.headerModuleProps} />
      </Header>

      <Content style={{ overflow: "auto" }}>
        <ServicesModule {...props.serviceModuleProps} />
      </Content>

      <Footer style={{ padding: 0 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};

import { DashboardModule } from "@/components/Modules/Dashboard/DashboardModule";
import { FooterModule } from "@/components/Modules/Footer/FooterModule";
import { HeaderModule } from "@/components/Modules/Header/HeaderModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const DashboardTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }} className='overflow-auto'>
      <Header
        style={{ padding: 0 }}
        className='relative flex h-auto w-full bg-white shadow-lg'
      >
        <HeaderModule {...props.headerModuleProps} />
      </Header>

      <Content className='overflow-auto bg-white'>
        <DashboardModule />
      </Content>

      <Footer style={{ padding: 0 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};

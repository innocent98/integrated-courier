import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { FooterModule } from "@/components/Modules/Footer/FooterModule";
import { HeaderModule } from "@/components/Modules/Header/HeaderModule";
import { CreateModule } from "@/components/Modules/Create/CreateModule";

type Props = {
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const CreateTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }} className='overflow-x-hidden'>
      <Header
        style={{ padding: 0 }}
        className='relative flex h-auto w-full bg-white shadow-lg'
      >
        <HeaderModule {...props.headerModuleProps} />
      </Header>

      <Content className='overflow-auto overflow-x-hidden bg-white'>
        <CreateModule />
      </Content>

      <Footer style={{ padding: 0 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};

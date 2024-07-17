import { FooterModule } from "@/components/Modules/Footer/FooterModule";
import { HeaderModule } from "@/components/Modules/Header/HeaderModule";
import { UpdateModule } from "@/components/Modules/Update/UpdateModule";
import { Layout } from "antd";
import { Header, Footer, Content } from "antd/es/layout/layout";

type Props = {
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
  updateIdModuleProps: React.ComponentProps<typeof UpdateModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const UpdateTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }} className='overflow-x-hidden'>
      <Header
        style={{ padding: 0 }}
        className='relative flex h-auto w-full bg-white shadow-lg'
      >
        <HeaderModule {...props.headerModuleProps} />
      </Header>

      <Content className='overflow-auto overflow-x-hidden bg-white'>
        <UpdateModule {...props.updateIdModuleProps} />
      </Content>

      <Footer style={{ padding: 0 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};

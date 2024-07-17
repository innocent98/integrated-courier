import { ContactFeedbackModule } from "@/components/Modules/Contact/ContactFeedbackModule";
import { ContactModule } from "@/components/Modules/Contact/ContactModule";
import { FooterModule } from "@/components/Modules/Footer/FooterModule";
import { HeaderModule } from "@/components/Modules/Header/HeaderModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const ContactTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }} className='overflow-x-hidden'>
      <Header
        style={{ padding: 0 }}
        className='relative flex h-auto w-full bg-white px-4 shadow-lg sm:px-16 md:px-20 lg:px-12'
      >
        <HeaderModule {...props.headerModuleProps} />
      </Header>

      <Content style={{ overflow: "auto" }}>
        <ContactFeedbackModule />
        <ContactModule />
      </Content>

      <Footer style={{ padding: 0 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};

import { TrackTrackModule } from "@/components/Modules/Track/TrackTrackModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { FooterModule } from "@/components/Modules/Footer/FooterModule";
import { HeaderModule } from "@/components/Modules/Header/HeaderModule";

type Props = {
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const TrackTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }} className='overflow-x-hidden'>
      <Header
        style={{ padding: 0 }}
        className='relative flex h-20 w-full bg-white px-4 shadow-lg sm:px-16 md:px-20 lg:px-12'
      >
        <HeaderModule {...props.headerModuleProps} />
      </Header>

      <Content style={{ overflow: "auto" }}>
        <TrackTrackModule />
      </Content>

      <Footer style={{ padding: 0 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};

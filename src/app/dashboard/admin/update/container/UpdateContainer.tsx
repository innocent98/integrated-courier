import { UpdateTemplate } from "@/components/Templates/Update/UpdateTemplate";
import { footerStore } from "@/stores/FooterStore/FooterStore";
import { headerStore } from "@/stores/HeaderStore/HeaderStore";

type Props = {
  id: string
}

export const UpdateContainer = (props: Props) => {
  const updateTemplateProps: React.ComponentProps<typeof UpdateTemplate> = {
    headerModuleProps: headerStore,

    updateIdModuleProps: {id: props.id},

    footerModuleProps: footerStore,
  };

  return <UpdateTemplate {...updateTemplateProps} />;
};

import SVGAtom from "@/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  id: number;
  icon: React.ComponentProps<typeof SVGAtom>["iconName"];
  title: string;
  desc: string;
};

export const ServiceComponent = (props: Props) => {
  return (
    <div className='flex h-[300px] w-[350px] flex-col gap-3 bg-white p-4 shadow-xl'>
      <SVGAtom
        iconName={props.icon}
        className='h-[50px] w-[50px] text-primary_color'
      />

      <div className='font-lato text-info-text text-custom_gray'>
        {props.title}
      </div>

      <div className='font-sans text-regular-text text-custom_lightgray'>
        {props.desc}
      </div>
    </div>
  );
};

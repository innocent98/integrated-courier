import SVGAtom from "@/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  id: number;
  icon: React.ComponentProps<typeof SVGAtom>["iconName"];
  title: string;
};

export const HomeIntroServiceComponent = (props: Props) => {
  return (
    <div className='flex h-[140px] w-full items-center gap-4 bg-primary_color md:w-[49%] lg:w-[49.5%]'>
      <div className='flex w-[30%] items-center justify-center'>
        <SVGAtom iconName={props.icon} height={70} width={70} color='white' />
      </div>

      <div className='text-info-text font-bold-text h-full w-full cursor-pointer bg-custom_lightgray p-10 font-raleway text-black duration-300 ease-in hover:text-primary_color'>
        {props.title}
      </div>
    </div>
  );
};

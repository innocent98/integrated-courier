import SVGAtom from "@/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  id: number;
  iconName: React.ComponentProps<typeof SVGAtom>["iconName"];
};

export const SocialIconComponent = (props: Props) => {
  return (
    <SVGAtom
      iconName={props.iconName}
      className='h-[16px] w-[16px] cursor-pointer text-white'
    />
  );
};

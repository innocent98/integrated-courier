import SVGAtom from "@/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  id: number;
  text: string;
  author: string;
};

export const TestimonialComponent = (props: Props) => {
  return (
    <div className='relative flex w-full flex-col gap-6 border-[3px] border-primary_color p-10 sm:w-[60%] md:w-[48%]'>
      <div className='font-regular-text font-sans text-custom_lightgray'>
        {props.text}
      </div>

      <div className='font-lato text-regular-text text-custom_gray'>
        {props.author}
      </div>

      <div className='absolute -top-6 border bg-custom_lightgray p-2'>
        <SVGAtom
          iconName='quote'
          className='h-[30px] w-[30px] text-custom_gray'
        />
      </div>
    </div>
  );
};

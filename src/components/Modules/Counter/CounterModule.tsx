import Image from "next/image";
import "./custom.css";
import SVGAtom from "@/components/Atoms/SVGAtom/SVGAtom";
import { SocialIconComponent } from "@/components/Components/SocialIconComponent/SocialIconComponent";
import { CounterComponent } from "@/components/Components/CounterComponent/CounterComponent";
import AnimatedComponent from "@/components/Components/AnimatedComponent/AnimatedComponent";
type Props = {
  counterTitle: string;
  counterDesc: string;
  icons: React.ComponentProps<typeof SocialIconComponent>[];
  counterData: React.ComponentProps<typeof CounterComponent>[];
};

export const CounterModule = (props: Props) => {
  return (
    <div className='counter flex flex-col gap-10 p-8 px-4 sm:px-16 md:flex-row md:px-20 lg:px-12'>
      <AnimatedComponent direction='bottom' classname="flex flex-col md:flex-row w-full">
        {/* left */}
        <div className='flex-[1]'>
          <div className='relative h-[300px] w-full bg-primary_color md:h-[400px] lg:h-full'>
            <Image fill src='/pngs/4.png' alt='3' className='h-full w-full' />

            <div className='absolute flex h-full w-full flex-col items-center justify-center p-20 text-white'>
              <SVGAtom iconName='road' color='white' height={100} width={100} />

              <div className='text-center font-lato text-[28px] font-bold-text md:text-big-text'>
                {props.counterTitle}
              </div>
              <div className='mt-2 font-sans text-regular-text font-normal-text'>
                {props.counterDesc}
              </div>

              <input
                type='search'
                placeholder='Tracking ID'
                className='mt-10 h-[40] w-full border-b bg-transparent p-2 text-white placeholder:text-white focus:outline-none'
              />

              <div className='mt-8 flex w-full justify-end gap-8'>
                {props.icons.map((item) => (
                  <SocialIconComponent key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='flex w-full flex-[1] flex-wrap gap-8 md:gap-0'>
          {props.counterData.map((item) => (
            <CounterComponent key={item.id} {...item} />
          ))}
        </div>
      </AnimatedComponent>
    </div>
  );
};

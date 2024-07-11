import { HomeIntroServiceComponent } from "@/components/Components/HomeIntroServiceComponent/HomeIntroServiceComponent";
import "./custom.css";
import { AwesomeServiceComponent } from "@/components/Components/AwesomeServiceComponent/AwesomeServiceComponent";
import AnimatedComponent from "@/components/Components/AnimatedComponent/AnimatedComponent";

type Props = {
  introTitle: string;
  introDesc: string;
  homeIntroService: React.ComponentProps<typeof HomeIntroServiceComponent>[];
  awesomeServices: React.ComponentProps<typeof AwesomeServiceComponent>[];
};

export const HomeIntroModule = (props: Props) => {
  return (
    <div className='home-intro flex flex-col items-center justify-center p-4 text-white'>
      <AnimatedComponent direction='bottom' classname="w-full flex flex-col items-center justify-center">
        <div className='text-center font-raleway text-[36px] font-bold-text sm:text-[40px] md:text-big-text lg:text-title-text'>
          {props.introTitle}
        </div>

        <div className='w-full text-center font-sans text-regular-text font-normal-text text-white sm:text-button-text md:w-[40%] md:text-desc-text'>
          {props.introDesc}
        </div>

        <div className='mt-16 flex w-[80%] flex-wrap justify-between gap-4 bg-opacity_white p-8'>
          <input
            type='text'
            placeholder='Enter Your Track ID'
            className='h-[50px] w-full rounded-[4px] px-6 font-sans text-light-text font-normal-text text-custom_gray placeholder:text-custom_gray focus:outline-none md:w-[68%]'
          />

          <button className='h-[50px] w-full rounded-[4px] bg-primary_color text-button-text font-semibold-text text-white md:w-[30%]'>
            Track Now
          </button>
        </div>
      </AnimatedComponent>
    </div>
  );
};

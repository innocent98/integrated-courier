import { AwesomeServiceComponent } from "@/components/Components/AwesomeServiceComponent/AwesomeServiceComponent";
import "./custom.css";
import Image from "next/image";
import AnimatedComponent from "@/components/Components/AnimatedComponent/AnimatedComponent";

type Props = {
  awesomeServices: React.ComponentProps<typeof AwesomeServiceComponent>[];
};

export const AwesomeServiceModule = (props: Props) => {
  return (
    <div className='flex w-full flex-col gap-8 bg-custom_lightgray p-8 px-4 sm:px-16 md:px-20 lg:px-12'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-center justify-center'>
          <AnimatedComponent direction='top'>
            <div className='text-center font-raleway text-[36px] font-bold-text md:text-big-text'>
              Our Awesome <span className='text-primary_color'>Services</span>
            </div>
          </AnimatedComponent>

          <div className='relative h-[40px] w-[120px]'>
            <Image
              src='/pngs/separater.png'
              alt='separater'
              width={120}
              height={40}
              className='h-auto w-auto object-contain'
            />
          </div>
        </div>

        <AnimatedComponent direction='bottom'>
          <div className='flex w-full flex-wrap justify-center gap-4'>
            {props.awesomeServices.map((item) => (
              <AwesomeServiceComponent key={item.id} {...item} />
            ))}
          </div>
        </AnimatedComponent>
      </div>
    </div>
  );
};

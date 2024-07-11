import AnimatedComponent from "@/components/Components/AnimatedComponent/AnimatedComponent";
import { CourierServiceComponent } from "@/components/Components/CourierServiceComponent/CourierServiceComponent";
import Image from "next/image";

type Props = React.ComponentProps<typeof CourierServiceComponent>[];

export const CourierServiceModule = (props: Props) => {
  const courierStore = Object.values(props);

  return (
    <div className='flex flex-col gap-8 p-10 px-4 sm:px-16 md:p-20 lg:flex-row lg:px-12'>
      {/* left */}
      <AnimatedComponent direction='left' classname='flex-[1]'>
        <div className='flex w-full flex-col items-center justify-center gap-4 lg:items-start lg:justify-start'>
          <div className='text-center font-raleway text-[36px] font-bold-text md:text-big-text lg:text-start'>
            Welcome{" "}
            <span className='text-primary_color'>
              To Integrated courier service
            </span>
          </div>

          <div className='relative h-[40px] w-[120px]'>
            <Image
              src='/pngs/separater.png'
              alt='separater'
              width={120}
              height={40}
              className='h-auto w-auto object-contain'
            />
          </div>

          {courierStore.map((item) => (
            <CourierServiceComponent key={item.id} {...item} />
          ))}
        </div>
      </AnimatedComponent>

      {/* right */}
      <AnimatedComponent direction='right' classname='flex-[1]'>
        <div className='w-full'>
          <div className='relative h-[500px] w-full shadow-xl'>
            <Image
              fill
              src='/jpgs/welcome.jpg'
              alt='welcome'
              className='h-full w-full'
            />
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
};

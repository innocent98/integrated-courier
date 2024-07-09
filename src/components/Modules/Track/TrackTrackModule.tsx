import { TextInputComponent } from "@/components/Components/TextInputComponent/TextInputComponent";
import Image from "next/image";

type Props = {
  // title: string;
};

export const TrackTrackModule = (props: Props) => {
  return (
    <div className='w-full gap-8 bg-white p-8 px-4 sm:px-16 md:px-20 lg:px-12'>
      <div className='flex w-full flex-col items-center justify-center py-20 lg:items-start lg:justify-start'>
        <div className='text-center font-raleway text-[36px] font-bold-text md:text-big-text'>
          Track & <span className='text-primary_color'>Trace Shipment</span>
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

        <div className='-mt-4 font-sans text-button-text font-normal-text text-custom_lightgray'>
          Enter Tracking Number Here
        </div>

        <div className='mt-4 flex w-full flex-wrap items-center justify-center gap-4 lg:items-start lg:justify-start lg:gap-0'>
          <TextInputComponent
            placeholder='Enter your tacking number e.g CRG-11-xxxx'
            width='80%'
            type={"text"}
          />

          <button className='h-[40px] w-[80%] rounded-lg bg-primary_color font-sans text-button-text font-normal-text text-white lg:-ml-2 lg:w-[18%] lg:rounded-none lg:rounded-r-lg'>
            Track Your Shipment
          </button>
        </div>
      </div>
    </div>
  );
};

import { TextInputComponent } from "@/components/Components/TextInputComponent/TextInputComponent";
import Image from "next/image";

type Props = {
  // title: string;
};

export const ContactFeedbackModule = (props: Props) => {
  return (
    <div className='w-full gap-8 bg-white p-8 px-4 sm:px-16 md:px-20 lg:px-12'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-center font-raleway text-[36px] font-bold-text md:text-big-text'>
            Give Us <span className='text-primary_color'>Your Feedback</span>
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

          <div className='-mt-4 font-sans text-regular-text font-normal-text text-custom_lightgray'>
            We Value Your Feedback Comments & Queries
          </div>
        </div>

        <div className='flex w-full flex-wrap items-start justify-center gap-8'>
          <TextInputComponent
            placeholder='Enter Your Name'
            width={"350px"}
            type={"text"}
          />
          <TextInputComponent
            placeholder='Your Email ID'
            width={"350px"}
            type={"email"}
          />
          <TextInputComponent
            placeholder='Your Contact'
            width={"350px"}
            type={"text"}
          />

          <textarea
            name='message'
            placeholder='Your Message'
            id=''
            rows={8}
            className='w-[350px] border border-custom_lightgray bg-white p-2 px-3 font-sans text-light-text font-normal-text text-custom_lightgray placeholder:text-custom_lightgray focus:outline-none lg:w-[88%]'
          ></textarea>

          <button className='w-[350px] bg-primary_color p-2 font-lato text-button-text text-white'>
            Request A Quote / Give Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

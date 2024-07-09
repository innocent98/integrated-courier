import { TestimonialComponent } from "@/components/Components/TestimonialComponent/TestimonialComponent";
import Image from "next/image";

type Props = React.ComponentProps<typeof TestimonialComponent>;

export const TestimonialModule = (props: Props[]) => {
  const testimonialStore = Object.values(props);

  return (
    <div className='w-full gap-8 bg-white p-8 px-4 sm:px-16 md:px-20 lg:px-12'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-center font-raleway text-[36px] font-bold-text md:text-big-text'>
            Client <span className='text-primary_color'>Testimonials</span>
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
        </div>

        <div className='flex w-full flex-col items-center justify-center gap-10 md:flex-row'>
          {testimonialStore.map((item) => (
            <TestimonialComponent key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

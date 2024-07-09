import Image from "next/image";

type Props = {
  id: number;
  img: string;
  text: string;
};

export const AwesomeServiceComponent = (props: Props) => {
  return (
    <div className='service_con relative h-[300px] w-full overflow-hidden sm:w-[49%] lg:w-[32%]'>
      <Image
        fill
        src={props.img}
        alt={props.text}
        className='service_img h-full w-auto object-contain lg:object-fill'
      />

      <div className='overlay absolute top-0 z-10 h-full w-full bg-black'></div>

      <div className='absolute bottom-10 z-10 h-[40px] w-[50%] bg-primary_color text-center font-raleway text-info-text font-semibold-text text-white'>
        {props.text}
      </div>
    </div>
  );
};

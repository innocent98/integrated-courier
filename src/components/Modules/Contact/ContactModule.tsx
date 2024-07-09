import "./custom.css";

type Props = {
  // Add props here
};

export const ContactModule = (props: Props) => {
  return (
    <div className='flex h-auto w-full flex-col md:h-[300px] md:flex-row'>
      {/* left */}
      <div className='sender flex flex-[1] flex-col items-center justify-center gap-6 p-8 px-4 text-center text-white sm:px-16 md:px-20 lg:px-12'>
        <div className='font-lato text-[36px]'>Are You A Sender?</div>
        <div className='font-sans text-regular-text font-normal-text'>
          We have multiple lucrative packages for the individual senders
        </div>

        <button className='border-[2px] border-primary_color bg-primary_color p-2 px-10 font-lato text-button-text duration-300 ease-in hover:bg-transparent hover:text-primary_color'>
          Check Packages
        </button>
      </div>

      {/* right */}
      <div className='flex h-full flex-[1] flex-col items-center justify-center gap-6 bg-primary_color p-8 px-4 text-center text-white sm:px-16 md:px-20 lg:px-12'>
        <div className='font-lato text-[36px]'>Are You A Shipper?</div>
        <div className='font-sans text-regular-text font-normal-text'>
          Lucrative incentives and facilities for large scale shipping
          consignments
        </div>

        <button className='border-[2px] border-white bg-white p-2 px-10 font-lato text-button-text text-primary_color duration-300 ease-in hover:bg-transparent hover:text-white'>
          Contact Us
        </button>
      </div>
    </div>
  );
};

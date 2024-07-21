import { ItemComponent } from "@/components/Components/ItemComponent/ItemComponent";
import { MapComponent } from "@/components/Components/MapComponent/MapComponent";
import { TextInputComponent } from "@/components/Components/TextInputComponent/TextInputComponent";
import { baseUrl } from "@/utils/baseUrl";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

type Props = {
  // title: string;
};

export const TrackTrackModule = (props: Props) => {
  const [order, setOrder] =
    useState<React.ComponentProps<typeof ItemComponent>>();
  const [trackingNo, setTranckingNo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetchOrder = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${baseUrl}/order_status`, { trackingNo });

      setOrder(res.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      alert(error?.response?.data?.message);
    }
  };

  return (
    <div className='w-full gap-8 bg-white p-8 px-4 sm:px-16 md:px-20 lg:px-12'>
      <div className='flex w-full flex-col items-center justify-center py-10 lg:items-start lg:justify-start'>
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

        <form
          onSubmit={handleFetchOrder}
          className='mt-4 flex w-full flex-wrap items-center justify-center gap-4 lg:items-start lg:justify-start lg:gap-0'
        >
          <TextInputComponent
            placeholder='Enter your tacking number e.g ICS-11-xxxx'
            width='80%'
            handleChange={(e) => setTranckingNo(e.target.value)}
            required
            type={"text"}
          />

          <button
            type='submit'
            className='h-[40px] w-[80%] rounded-md bg-primary_color font-sans text-button-text font-normal-text text-white lg:-ml-2 lg:w-[18%] lg:rounded-none lg:rounded-r-md'
          >
            {loading ? "Please wait..." : "Track Your Shipment"}
          </button>
        </form>

        {order && (
          <div className='flex w-full flex-col gap-4'>
            <ItemComponent {...order} />
            <MapComponent address={order.currentLocation} />
          </div>
        )}
      </div>
    </div>
  );
};

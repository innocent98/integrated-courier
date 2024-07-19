import { TextInputComponent } from "@/components/Components/TextInputComponent/TextInputComponent";
import { baseUrl } from "@/utils/baseUrl";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

type Props = {
  // title: string;
};

type Order = {
  itemTitle: string;
  pickupFrom: string;
  deliverTo: string;
  currentLocation: string;
  itemQuantity: string;
  orderStatus: string;
};

export const TrackTrackModule = (props: Props) => {
  const [order, setOrder] = useState<Order>();
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
          <div className='mt-6 flex flex-col gap-2'>
            <div className='flex flex-col items-center justify-center lg:items-start'>
              <div className='text-center font-raleway text-[36px] font-bold-text md:text-big-text'>
                Item <span className='text-primary_color'>Details</span>
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

            <div className='font-sans text-button-text font-normal-text text-custom_lightgray'>
              Item:{" "}
              <span className='font-semibold-text'>{order?.itemTitle}</span>
            </div>

            <div className='font-sans text-button-text font-normal-text text-custom_lightgray'>
              Pickup Address:{" "}
              <span className='font-semibold-text'>{order?.pickupFrom}</span>
            </div>

            <div className='font-sans text-button-text font-normal-text text-custom_lightgray'>
              Delivery Address:{" "}
              <span className='font-semibold-text'>{order?.deliverTo}</span>
            </div>

            <div className='font-sans text-button-text font-normal-text text-custom_lightgray'>
              Current Location:{" "}
              <span className='font-semibold-text'>
                {order?.currentLocation}
              </span>
            </div>

            <div className='font-sans text-button-text font-normal-text text-custom_lightgray'>
              Order Status:{" "}
              <span className='font-semibold-text capitalize'>
                {order?.orderStatus === "pending"
                  ? "Pending Delivery"
                  : order.orderStatus === "delivered"
                    ? "Item Delivered"
                    : "Item waiting for shipment"}
              </span>
            </div>

            <div className='font-sans text-button-text font-normal-text text-custom_lightgray'>
              Quantity:{" "}
              <span className='font-semibold-text'>{order?.itemQuantity}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

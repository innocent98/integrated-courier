import Image from "next/image";

type Props = {
  itemTitle: string;
  pickupFrom: string;
  deliverTo: string;
  currentLocation: string;
  itemQuantity: string;
  orderStatus: string;
};

export const ItemComponent = (props: Props) => {
  return (
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
        Item: <span className='font-semibold-text'>{props?.itemTitle}</span>
      </div>

      <div className='font-sans text-button-text font-normal-text text-custom_lightgray'>
        Pickup Address:{" "}
        <span className='font-semibold-text'>{props?.pickupFrom}</span>
      </div>

      <div className='font-sans text-button-text font-normal-text text-custom_lightgray'>
        Delivery Address:{" "}
        <span className='font-semibold-text'>{props?.deliverTo}</span>
      </div>

      <div className='font-sans text-button-text font-normal-text text-custom_lightgray'>
        Current Location:{" "}
        <span className='font-semibold-text'>{props?.currentLocation}</span>
      </div>

      <div className='font-sans text-button-text font-normal-text text-custom_lightgray'>
        Order Status:{" "}
        <span className='font-semibold-text capitalize'>
          {props?.orderStatus === "pending"
            ? "Pending Delivery"
            : props.orderStatus === "delivered"
              ? "Item Delivered"
              : "Item waiting for shipment"}
        </span>
      </div>

      <div className='font-sans text-button-text font-normal-text text-custom_lightgray'>
        Quantity:{" "}
        <span className='font-semibold-text'>{props?.itemQuantity}</span>
      </div>
    </div>
  );
};

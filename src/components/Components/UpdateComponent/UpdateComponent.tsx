import { TextInputComponent } from "../TextInputComponent/TextInputComponent";

type Props = {
  // Add props here
};

type Order = {
  _id: string;
  senderName: string;
  senderPhone: string;
  senderEmail: string;
  receiverName: string;
  receiverPhone: string;
  receiverEmail: string;
  itemTitle: string;
  itemKg: string;
  itemQuantity: string;
  price: string;
  pickupFrom: string;
  deliverTo: string;
  trackingNo: string;
  orderStatus: string;
  currentLocation: string;
};

export const UpdateComponent = (props: Props) => {
  const order = props as Order;

  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-6'>
      <TextInputComponent
        placeholder={"Sender Name"}
        width={"350px"}
        type={"text"}
        value={`Sender Name: ${order?.senderName}`}
      />
      <TextInputComponent
        placeholder={"Sender Phone No"}
        width={"350px"}
        type={"text"}
        value={`Sender Phone No: ${order?.senderPhone}`}
      />
      <TextInputComponent
        placeholder={"Sender Email"}
        width={"350px"}
        type={"text"}
        value={`Sender Email: ${order?.senderEmail}`}
      />
      <TextInputComponent
        placeholder={"Receiver Name"}
        width={"350px"}
        type={"text"}
        value={`Receiver Name: ${order?.receiverName}`}
      />
      <TextInputComponent
        placeholder={"Receiver Phone No"}
        width={"350px"}
        type={"text"}
        value={`Receiver Phone No: ${order?.receiverPhone}`}
      />
      <TextInputComponent
        placeholder={"Receiver Email"}
        width={"350px"}
        type={"text"}
        value={`Receiver Email: ${order?.receiverEmail}`}
      />
      <TextInputComponent
        placeholder={"Item Title"}
        width={"350px"}
        type={"text"}
        value={`Item Title: ${order?.itemTitle}`}
      />
      <TextInputComponent
        placeholder={"Item KG"}
        width={"350px"}
        type={"text"}
        value={`Item KG: ${order?.itemKg}`}
      />
      <TextInputComponent
        placeholder={"Item Quantity"}
        width={"350px"}
        type={"text"}
        value={`Item Qty.: ${order?.itemQuantity}`}
      />
      <TextInputComponent
        placeholder={"Price"}
        width={"350px"}
        type={"text"}
        value={`Price: NGN${order?.price}`}
      />
      <TextInputComponent
        placeholder={"Pickup From"}
        width={"350px"}
        type={"text"}
        value={`Pickup Address: ${order?.pickupFrom}`}
      />
      <TextInputComponent
        placeholder={"Deliver To"}
        width={"350px"}
        type={"text"}
        value={`Delivery Address: ${order?.deliverTo}`}
      />
      <TextInputComponent
        placeholder={"Tracking No"}
        width={"350px"}
        type={"text"}
        value={`Tracking No: ${order?.trackingNo}`}
      />
      <TextInputComponent
        placeholder={"Current Location"}
        width={"350px"}
        type={"text"}
        defaultValue={`Current Location: ${order?.currentLocation}`}
      />
      <select
        name='status'
        id=''
        defaultValue={`Item ${order?.orderStatus}`}
        className='h-[40px] w-[350px] rounded-md border border-custom_lightgray bg-white px-3 font-sans text-light-text font-normal-text text-custom_lightgray placeholder:text-custom_lightgray focus:outline-none'
      >
        <option value=''>{`Item ${order?.orderStatus}`}</option>
        <option value='pending_delivery'>Item Pending Delivery</option>
        <option value='delivered'>Item Delivered</option>
      </select>

      <button
        type='submit'
        className='my-6 h-[40px] w-[350px] rounded-md bg-primary_color font-lato text-button-text text-white'
      >
        Continue
      </button>
    </div>
  );
};

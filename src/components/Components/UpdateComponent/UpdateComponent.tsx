import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { TextInputComponent } from "../TextInputComponent/TextInputComponent";

type Props = {
  handleChange: (e: any) => void;
  loading: boolean;
  setCurrentLocationInput: (value: any) => void;
  currentLocationInput: any;
  setPickupFromInput: (value: any) => void;
  pickupFromInput: any;
  setdeliverToInput: (value: any) => void;
  deliverToInput: any;
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
  pickupFrom: any;
  deliverTo: any;
  trackingNo: string;
  orderStatus: string;
  currentLocation: any;
};

export const UpdateComponent = (props: Props) => {
  const order = props as unknown as Order;

  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-6'>
      <TextInputComponent
        placeholder={"Sender Name"}
        width={"350px"}
        type={"text"}
        name='senderName'
        handleChange={props.handleChange}
        defaultValue={`Sender Name: ${order?.senderName}`}
      />
      <TextInputComponent
        placeholder={"Sender Phone No"}
        width={"350px"}
        type={"text"}
        name='senderPhone'
        handleChange={props.handleChange}
        defaultValue={`Sender Phone No: ${order?.senderPhone}`}
      />
      <TextInputComponent
        placeholder={"Sender Email"}
        width={"350px"}
        type={"text"}
        name='senderEmail'
        handleChange={props.handleChange}
        defaultValue={`Sender Email: ${order?.senderEmail}`}
      />
      <TextInputComponent
        placeholder={"Receiver Name"}
        width={"350px"}
        type={"text"}
        name='receiverName'
        handleChange={props.handleChange}
        defaultValue={`Receiver Name: ${order?.receiverName}`}
      />
      <TextInputComponent
        placeholder={"Receiver Phone No"}
        width={"350px"}
        type={"text"}
        name='receiverPhone'
        handleChange={props.handleChange}
        defaultValue={`Receiver Phone No: ${order?.receiverPhone}`}
      />
      <TextInputComponent
        placeholder={"Receiver Email"}
        width={"350px"}
        type={"text"}
        name='receiverEmail'
        handleChange={props.handleChange}
        defaultValue={`Receiver Email: ${order?.receiverEmail}`}
      />
      <TextInputComponent
        placeholder={"Item Title"}
        width={"350px"}
        type={"text"}
        name='itemTitle'
        handleChange={props.handleChange}
        defaultValue={`Item Title: ${order?.itemTitle}`}
      />
      <TextInputComponent
        placeholder={"Item KG"}
        width={"350px"}
        type={"text"}
        name='itemKg'
        handleChange={props.handleChange}
        defaultValue={`Item KG: ${order?.itemKg}`}
      />
      <TextInputComponent
        placeholder={"Item Quantity"}
        width={"350px"}
        type={"text"}
        name='itemQuantity'
        handleChange={props.handleChange}
        defaultValue={`Item Qty.: ${order?.itemQuantity}`}
      />

      <div className='relative'>
        {/* <div className='absolute text-custom_lightgray top-[10px] left-[54px] font-sans text-light-text font-normal-text'>$</div> */}
        <TextInputComponent
          placeholder={"Price"}
          width={"350px"}
          type={"text"}
          name='price'
          handleChange={props.handleChange}
          defaultValue={`Price $:${order?.price}`}
        />
      </div>

      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          value: props.pickupFromInput,
          onChange(newValue, actionMeta) {
            props.setPickupFromInput(newValue);
          },
          placeholder: `Pickup Address: ${order?.pickupFrom}`,
          className: "w-[350px] rounded-md border border-custom_lightgray",
        }}
      />

      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          value: props.deliverToInput,
          onChange(newValue, actionMeta) {
            props.setdeliverToInput(newValue);
          },
          placeholder: `Delivery Address: ${order?.deliverTo}`,
          className: "w-[350px] rounded-md border border-custom_lightgray",
        }}
      />

      <TextInputComponent
        placeholder={"Tracking No"}
        width={"350px"}
        type={"text"}
        value={`Tracking No: ${order?.trackingNo}`}
      />

      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          value: props.currentLocationInput,
          onChange(newValue, actionMeta) {
            props.setCurrentLocationInput(newValue);
          },
          placeholder: `Current Location: ${order?.currentLocation}`,
          className: "w-[350px] rounded-md border border-custom_lightgray",
        }}
      />

      <select
        name='orderStatus'
        id=''
        onChange={props.handleChange}
        defaultValue={`Item ${order?.orderStatus}`}
        className='h-[40px] w-[350px] rounded-md border border-custom_lightgray bg-white px-3 font-sans text-light-text font-normal-text text-custom_lightgray placeholder:text-custom_lightgray focus:outline-none'
      >
        <option
          value={order?.orderStatus}
        >{`Item ${order?.orderStatus}`}</option>
        <option value='pending'>Item Pending Delivery</option>
        <option value='delivered'>Item Delivered</option>
      </select>

      <button
        type='submit'
        disabled={props.loading}
        className='my-6 h-[40px] w-[350px] rounded-md bg-primary_color font-lato text-button-text text-white'
      >
        {props.loading ? "Please wait..." : "Continue"}
      </button>
    </div>
  );
};

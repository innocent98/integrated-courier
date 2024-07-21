import { TextInputComponent } from "@/components/Components/TextInputComponent/TextInputComponent";
import { baseUrl } from "@/utils/baseUrl";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
// import Autocomplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

type Props = {
  // title: string;
};

export const CreateModule = (props: Props) => {
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [pickupFrom, setPickupFrom] = useState<any>(null);
  const [deliverTo, setDeliverTo] = useState<any>(null);

  const handleChange = (e: any) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    if (pickupFrom) {
      setInputs((prev) => {
        return { ...prev, pickupFrom: pickupFrom.label };
      });
    } else if (deliverTo) {
      setInputs((prev) => {
        return { ...prev, deliverTo: deliverTo.label };
      });
    }
  }, [pickupFrom, deliverTo]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${baseUrl}/create_order`, { ...inputs });

      setLoading(false);
      alert("Order created successfully.");

      window.location.reload();
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("An error occured, please try again");
    }
  };

  return (
    <div className='w-full bg-custom_lightgray p-8 px-4 sm:px-16 md:px-20 lg:px-12'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-center font-raleway text-[36px] font-bold-text md:text-big-text'>
            New <span className='text-primary_color'>Order</span>
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

        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          {/* <Autocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            onPlaceSelected={(place) => console.log(place)}
          /> */}

          <div className='flex w-full flex-wrap items-center justify-center gap-6'>
            <TextInputComponent
              placeholder={"Sender Name"}
              width={"350px"}
              type={"text"}
              name='senderName'
              required
              handleChange={handleChange}
            />
            <TextInputComponent
              placeholder={"Sender Phone No"}
              width={"350px"}
              type={"text"}
              name='senderPhone'
              required
              handleChange={handleChange}
            />
            <TextInputComponent
              placeholder={"Sender Email"}
              width={"350px"}
              type={"text"}
              name='senderEmail'
              required
              handleChange={handleChange}
            />
            <TextInputComponent
              placeholder={"Receiver Name"}
              width={"350px"}
              type={"text"}
              name='receiverName'
              required
              handleChange={handleChange}
            />
            <TextInputComponent
              placeholder={"Receiver Phone No"}
              width={"350px"}
              type={"text"}
              name='receiverPhone'
              required
              handleChange={handleChange}
            />
            <TextInputComponent
              placeholder={"Receiver Email"}
              width={"350px"}
              type={"text"}
              name='receiverEmail'
              required
              handleChange={handleChange}
            />
            <TextInputComponent
              placeholder={"Item Title"}
              width={"350px"}
              type={"text"}
              name='itemTitle'
              required
              handleChange={handleChange}
            />
            <TextInputComponent
              placeholder={"Item KG"}
              width={"350px"}
              type={"number"}
              name='itemKg'
              required
              handleChange={handleChange}
            />
            <TextInputComponent
              placeholder={"Item Quantity"}
              width={"350px"}
              type={"number"}
              name='itemQuantity'
              required
              handleChange={handleChange}
            />
            <TextInputComponent
              placeholder={"Price"}
              width={"350px"}
              type={"number"}
              name='price'
              required
              defaultValue="$"
              handleChange={handleChange}
            />

            <GooglePlacesAutocomplete
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
              selectProps={{
                value: pickupFrom,
                onChange(newValue, actionMeta) {
                  setPickupFrom(newValue);
                },
                placeholder: "Pickup From",
                className:
                  "w-[350px] rounded-md border border-custom_lightgray",
              }}
            />
            <GooglePlacesAutocomplete
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
              selectProps={{
                value: deliverTo,
                onChange(newValue, actionMeta) {
                  setDeliverTo(newValue);
                },
                placeholder: "Deliver To",
                className:
                  "w-[350px] rounded-md border border-custom_lightgray",
              }}
            />
          </div>

          <button
            type='submit'
            className='my-6 h-[40px] w-[350px] rounded-md bg-primary_color font-lato text-button-text text-white'
            disabled={loading}
          >
            {loading ? "Please wait" : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

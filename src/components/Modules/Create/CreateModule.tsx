import { TextInputComponent } from "@/components/Components/TextInputComponent/TextInputComponent";
import { baseUrl, baseUrl2 } from "@/utils/baseUrl";
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
    }
    if (deliverTo) {
      setInputs((prev) => {
        return { ...prev, deliverTo: deliverTo.label };
      });
    }
  }, [pickupFrom, deliverTo]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${baseUrl2}/create_order`, { ...inputs });

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
              defaultValue='$'
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



// 🌍 Alternative Autocomplete APIs
// 1️⃣ Algolia Places (Free & Open-Source)
// Algolia Places is a free geocoding & autocomplete API based on OpenStreetMap.
// 🚀 Easy to integrate and doesn't require a paid API key.
// ✅ Install the package:
// npm install @algolia/autocomplete-js
// npm install @algolia/autocomplete-react
// ✅ Replace Google Places with Algolia Places:
// import { autocomplete } from "@algolia/autocomplete-js";
// import { useEffect, useRef, useState } from "react";

// export default function AddressAutocomplete({ placeholder, onChange }) {
//   const containerRef = useRef(null);
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     if (!containerRef.current) return;

//     autocomplete({
//       container: containerRef.current,
//       placeholder,
//       onStateChange({ state }) {
//         if (state.query !== value) {
//           setValue(state.query);
//           onChange(state.query);
//         }
//       },
//     });
//   }, [value]);

//   return <div ref={containerRef} className="w-[350px] border p-2"></div>;
// }

// ✅ Use in your component:

// tsx
// Copy
// <AddressAutocomplete placeholder="Pickup From" onChange={setPickupFrom} />
// <AddressAutocomplete placeholder="Deliver To" onChange={setDeliverTo} />

// 🔹 Pros: Free, No API key required, based on OpenStreetMap.
// 🔹 Cons: Not as advanced as Google Places.


// 2️⃣ OpenStreetMap + Nominatim API (Completely Free)
// Open-source, no API key required, free for personal and small-scale commercial use.
// ✅ Fetch address suggestions from Nominatim API:
// import { useState } from "react";

// export default function NominatimAutocomplete({ placeholder, onSelect }) {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   const fetchSuggestions = async (value) => {
//     if (!value) {
//       setSuggestions([]);
//       return;
//     }

//     const res = await fetch(
//       `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
//     );
//     const data = await res.json();
//     setSuggestions(data);
//   };

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => {
//           setQuery(e.target.value);
//           fetchSuggestions(e.target.value);
//         }}
//         placeholder={placeholder}
//         className="w-[350px] border p-2"
//       />
//       {suggestions.length > 0 && (
//         <ul className="absolute bg-white border w-full">
//           {suggestions.map((place) => (
//             <li
//               key={place.place_id}
//               className="p-2 cursor-pointer hover:bg-gray-200"
//               onClick={() => {
//                 setQuery(place.display_name);
//                 setSuggestions([]);
//                 onSelect(place.display_name);
//               }}
//             >
//               {place.display_name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// ✅ Use in your component:

// tsx
// Copy
// <NominatimAutocomplete placeholder="Pickup From" onSelect={setPickupFrom} />
// <NominatimAutocomplete placeholder="Deliver To" onSelect={setDeliverTo} />

// 🔹 Pros: 100% free, no API key needed.
// 🔹 Cons: Slightly slower than Google, limited to OpenStreetMap data.

// 3️⃣ Mapbox Places API (Free Up to 100k Requests/Month)
// Alternative to Google Places with generous free tier.
// Requires API key, but free up to 100,000 requests/month.
// ✅ Sign up & get an API key:
// 🔗 https://www.mapbox.com/

// ✅ Install package:

// sh
// Copy
// npm install @mapbox/mapbox-gl-geocoder

// ✅ Use Mapbox Places:
// import { useEffect, useRef } from "react";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

// export default function MapboxAutocomplete({ placeholder, onSelect }) {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const geocoder = new MapboxGeocoder({
//       accessToken: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
//       placeholder,
//     });

//     if (containerRef.current) {
//       containerRef.current.appendChild(geocoder.onAdd());
//     }

//     geocoder.on("result", (e) => {
//       onSelect(e.result.place_name);
//     });

//     return () => geocoder.onRemove();
//   }, []);

//   return <div ref={containerRef} className="w-[350px] border p-2"></div>;
// }

// ✅ Use in your component:

// tsx
// Copy
// <MapboxAutocomplete placeholder="Pickup From" onSelect={setPickupFrom} />
// <MapboxAutocomplete placeholder="Deliver To" onSelect={setDeliverTo} />
// 🔹 Pros: High accuracy, generous free tier, modern UI.
// 🔹 Cons: Requires an API key.

// 🎯 Which One Should You Use?
// Alternative	Free?	API Key?	Accuracy	Ease of Use
// Algolia Places	✅ Yes	❌ No	⭐⭐⭐	⭐⭐⭐⭐
// OpenStreetMap (Nominatim)	✅ Yes	❌ No	⭐⭐⭐	⭐⭐⭐
// Mapbox Places	✅ Yes (100k reqs)	✅ Yes	⭐⭐⭐⭐	⭐⭐⭐⭐⭐
// 👉 Go with OpenStreetMap (Nominatim) if you want a 100% free solution with no API key.
// 👉 Use Mapbox if you need high accuracy and a free API key alternative to Google Places.
// 👉 Try Algolia Places for a lightweight, free, and open-source solution.

// Let me know if you need help implementing one of these! 🚀


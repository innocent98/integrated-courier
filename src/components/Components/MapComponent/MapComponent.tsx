import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

type Props = {
  address: string;
};

export const MapComponent = (props: Props) => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
      version: "weekly",
    });

    loader.load().then(() => {
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address: props.address }, (results: any, status) => {
        console.log(results);
        if (status === "OK") {
          const map = new google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 8,
          });
          new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          console.error(
            `Geocode was not successful for the following reason: ${status}`
          );
        }
      });
    });
  }, [props.address]);

  return <div ref={mapRef} className='h-[400px] w-full' />;
};

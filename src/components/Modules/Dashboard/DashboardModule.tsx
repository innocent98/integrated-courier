import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/utils/baseUrl";
import { DashboardComponent } from "@/components/Components/DashboardComponent/DashboardComponent";
import Image from "next/image";

type Props = {
  // title: string;
};

export const DashboardModule = (props: Props) => {
  const [orders, setOrders] = useState<typeof DashboardComponent>();

  const handleFetchOrder = async () => {
    try {
      const res = await fetch(`${baseUrl}/orders`, { cache: "no-store" });

      const data = await res.json();

      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      handleFetchOrder();
    }

    return () => {
      subscribe = false;
    };
  }, []);

  return (
    <div className='w-full gap-8 bg-white py-8'>
      <div className='flex w-full flex-col items-center justify-center'>
        <div className='text-center font-raleway text-[36px] font-bold-text md:text-big-text'>
          Items & <span className='text-primary_color'>Order Details</span>
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

        <DashboardComponent {...orders} />
      </div>
    </div>
  );
};

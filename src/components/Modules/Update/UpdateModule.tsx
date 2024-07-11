"use client";

import { UpdateComponent } from "@/components/Components/UpdateComponent/UpdateComponent";
import { baseUrl } from "@/utils/baseUrl";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  id: string;
};

export const UpdateModule = (props: Props) => {
  const [order, setOrder] = useState<typeof UpdateComponent>();

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      const handleFetchOrder = async () => {
        try {
          const res = await axios.get(`${baseUrl}/orders/${props.id}`);

          setOrder(res.data);
        } catch (error) {
          console.log(error);
        }
      };

      handleFetchOrder();
    }

    return () => {
      subscribe = false;
    };
  }, [props.id]);

  return (
    <div className='w-full bg-custom_lightgray p-8 px-4 sm:px-16 md:px-20 lg:px-12'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-center font-raleway text-[36px] font-bold-text md:text-big-text'>
            Edit <span className='text-primary_color'>Order</span>
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

        <form className='flex flex-col items-center'>
          <UpdateComponent {...order} />
        </form>
      </div>
    </div>
  );
};

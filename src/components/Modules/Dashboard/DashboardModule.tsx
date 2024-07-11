import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/utils/baseUrl";
import { DashboardComponent } from "@/components/Components/DashboardComponent/DashboardComponent";

type Props = {
  // title: string;
};

export const DashboardModule = (props: Props) => {
  const [orders, setOrders] = useState<typeof DashboardComponent>();

  const handleFetchOrder = async () => {
    try {
      const res = await axios.get(`${baseUrl}/orders`);

      setOrders(res.data);
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
    <div>
      <DashboardComponent {...orders} />
    </div>
  );
};

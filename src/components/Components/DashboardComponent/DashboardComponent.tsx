import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  //
};

type DataType = {
  key: React.Key;
  _id: string;
  senderName: string;
  receiverName: string;
  itemTitle: string;
  trackingNo: string;
  orderStatus: string;
};

export const DashboardComponent = (props: Props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const router = useRouter();

  const columns: TableColumnsType<DataType> = [
    {
      title: "Sender Name",
      dataIndex: "senderName",
    },
    {
      title: "Receiver Name",
      dataIndex: "receiverName",
    },
    {
      title: "Item Title",
      dataIndex: "itemTitle",
    },
    {
      title: "Tracking No",
      dataIndex: "trackingNo",
    },
    {
      title: "Order Status",
      dataIndex: "orderStatus",
    },
  ];

  const data: DataType[] = Object.values(props);
  const dataSummaries: DataType[] = [];

  data.forEach((item) => {
    const summary: DataType = {
      key: item._id,
      _id: item._id,
      senderName: item.senderName,
      receiverName: item.receiverName,
      itemTitle: item.itemTitle,
      trackingNo: item.trackingNo,
      orderStatus: item.orderStatus?.toUpperCase(),
    };

    dataSummaries.push(summary);
  });

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    router.push(`/dashboard/admin/update/${newSelectedRowKeys}`);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSummaries}
      className="w-full"
    />
  );
};

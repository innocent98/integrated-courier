import { CheckCircleOutlined } from "@ant-design/icons";

type Props = {
  id: number;
  title: string;
  desc: string;
};

export const CourierServiceComponent = (props: Props) => {
  return (
    <div className='flex items-start gap-6'>
      <CheckCircleOutlined className='text-2xl text-primary_color' />

      <div className='flex flex-col gap-2'>
        <div className='font-raleway text-desc-text font-bold text-custom_gray'>
          {props.title}
        </div>

        <div className='text-regular-text font-normal-text font-sans text-custom_lightgray'>
          {props.desc}
        </div>
      </div>
    </div>
  );
};

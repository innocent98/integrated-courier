import {
  CheckOutlined,
  LikeOutlined,
  MailOutlined,
  PhoneFilled,
  UserOutlined,
} from "@ant-design/icons";
import "./custom.css";
import Link from "next/link";
import { FooterUsefulLinkComponent } from "@/components/Components/FooterUsefulLinkComponent/FooterUsefulLinkComponent";

type Props = {
  mailTitle: string;
  mailContent: string;
  aboutTitle: string;
  aboutContent: string;
  phone: string;
  mail: string;
  usefulLinks: React.ComponentProps<typeof FooterUsefulLinkComponent>[];
};

export const FooterModule = (props: Props) => {
  return (
    <div className='footer flex w-full flex-col justify-between border-t-4 border-t-primary_color'>
      <div className='flex w-full flex-col gap-16 p-8 px-4 sm:px-16 md:px-20 lg:flex-row lg:gap-0 lg:px-12'>
        {/* left */}
        <div className='flex w-full flex-[1] flex-col items-center justify-between gap-6 sm:items-start sm:justify-normal'>
          <div className='flex gap-3'>
            <LikeOutlined className='text-2xl text-primary_color' />
            <div className='font-lato text-info-text'>Useful Links</div>
          </div>

          <div className='flex w-[300px] flex-wrap gap-4'>
            {props.usefulLinks.map((item) => (
              <FooterUsefulLinkComponent key={item.id} {...item} />
            ))}
          </div>
        </div>

        {/* right */}
        <div className='flex flex-[1] flex-wrap justify-center gap-16 sm:gap-4'>
          {/* left */}
          <div className='flex w-full flex-col gap-6 md:w-[48%]'>
            <div className='flex gap-3'>
              <MailOutlined className='text-2xl text-primary_color' />
              <div className='font-lato text-info-text'>{props.mailTitle}</div>
            </div>

            <div className='font-sans text-regular-text font-normal-text'>
              {props.mailContent}
            </div>

            <div className='flex w-full'>
              <input
                type='text'
                placeholder='Email address'
                className='w-[80%] p-2 font-sans font-normal-text text-custom_lightgray placeholder:text-custom_lightgray focus:outline-none'
              />

              <div className='cursor-pointer bg-primary_color p-2'>
                <CheckOutlined className='text-2xl text-white' />
              </div>
            </div>
          </div>

          {/* right */}
          <div className='flex w-full flex-col gap-6 md:w-[48%]'>
            <div className='flex gap-3'>
              <UserOutlined className='text-2xl text-primary_color' />
              <div className='font-lato text-info-text'>{props.aboutTitle}</div>
            </div>

            <div className='font-sans text-regular-text font-normal-text'>
              {props.aboutContent}
            </div>

            <div className='-mt-3 flex w-full items-center gap-4'>
              <PhoneFilled className='text-2xl text-primary_color' />

              <div className='flex flex-col'>
                <div className='font-sans text-[30px] font-normal-text text-primary_color'>
                  {props.phone}
                </div>

                <div className='font-sans text-regular-text font-normal-text'>
                  {props.mail}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex h-[70px] w-full items-center justify-center bg-primary_color'>
        <div className='text-center font-sans text-light-text font-normal-text text-white'>
          Freight delivery courier service © 2023 / ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

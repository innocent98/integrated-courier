import Link from "next/link";

type Props = {
  id: number;
  text: string;
  url: string;
};

export const FooterUsefulLinkComponent = (props: Props) => {
  return (
    <Link
      href={props.url}
      className='w-[47%] font-sans text-regular-text font-normal-text duration-300 ease-in hover:text-primary_color'
    >
      {props.text}
    </Link>
  );
};

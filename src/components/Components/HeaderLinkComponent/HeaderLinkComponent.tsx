import Link from "next/link";

type Props = {
  id: number;
  text: string;
  url: string;
};

export const HeaderLinkComponent = (props: Props) => {
  return (
    <Link
      href={props.url}
      className='font-raleway text-regular-text font-semibold-text text-custom_gray duration-300 ease-in hover:text-primary_color'
    >
      {props.text}
    </Link>
  );
};

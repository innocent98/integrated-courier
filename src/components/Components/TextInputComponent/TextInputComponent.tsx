type Props = {
  placeholder: string;
  width: string;
  type: any
};

export const TextInputComponent = (props: Props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={`w-[${props.width}] rounded-lg border border-custom_lightgray bg-white h-[40px] px-3 font-sans text-light-text font-normal-text text-custom_lightgray placeholder:text-custom_lightgray focus:outline-none`}
    />
  );
};

type Props = {
  placeholder: string;
  width: string;
  type: any;
  name?: string;
  handleChange?: (e: any) => void;
  value?: string;
  defaultValue?: string;
  required?: boolean;
};

export const TextInputComponent = (props: Props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={`w-[${props.width}] h-[40px] rounded-md border border-custom_lightgray bg-white px-3 font-sans text-light-text font-normal-text text-custom_lightgray placeholder:text-custom_lightgray focus:outline-none`}
      name={props.name}
      onChange={props.handleChange}
      value={props.value}
      defaultValue={props.defaultValue}
      required={props.required}
    />
  );
};

import { ServiceComponent } from "@/components/Components/ServiceComponent/ServiceComponent";

type Props = {
  services: React.ComponentProps<typeof ServiceComponent>[];
};

export const ServicesModule = (props: Props) => {
  return (
    <div className='flex w-full flex-wrap justify-center gap-4 bg-white p-10 px-4 sm:px-16 md:p-20 lg:flex-row lg:px-12'>
      {props.services.map((item) => (
        <ServiceComponent key={item.id} {...item} />
      ))}
    </div>
  );
};

import AnimatedComponent from "@/components/Components/AnimatedComponent/AnimatedComponent";
import { HomeIntroServiceComponent } from "@/components/Components/HomeIntroServiceComponent/HomeIntroServiceComponent";

type Props = {
  homeIntroService: React.ComponentProps<typeof HomeIntroServiceComponent>[];
};

export const HomeIntroServiceModule = (props: Props) => {
  return (
    <AnimatedComponent direction="bottom">
      <div className='flex w-full flex-wrap gap-2'>
        {props.homeIntroService.map((item) => (
          <HomeIntroServiceComponent key={item.id} {...item} />
        ))}
      </div>
    </AnimatedComponent>
  );
};

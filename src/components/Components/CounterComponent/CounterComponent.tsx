import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

type Props = {
  id: number;
  number: string;
  text: string;
};

export const CounterComponent = (props: Props) => {
  const [count, setCount] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the counter always when in view
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // Duration of the counter animation in milliseconds
      const stepTime = Math.abs(Math.floor(duration / parseInt(props.number)));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= parseInt(props.number)) {
          clearInterval(timer);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [inView, props.number]);

  return (
    <div className='counter_box flex w-full flex-col items-center justify-center gap-2 text-white md:w-[50%]'>
      <div
        ref={ref}
        className='text-center font-lato text-big-text'
        style={{ width: `${props.number.length + 1}ch` }}
      >
        {count}
      </div>
      <div className='h-[4px] w-[25px] bg-primary_color'></div>
      <div className='text-center font-lato text-regular-text'>
        {props.text}
      </div>
    </div>
  );
};

import { type PropsWithChildren, useEffect, type ReactNode, CSSProperties } from "react";
import { useAnimation, motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedComponentProps = {
  children: ReactNode;
  animation?: Variants;
  direction?: "left" | "right" | "top" | "bottom";
  classname?: string
};

const AnimatedComponent = (
  props: PropsWithChildren<AnimatedComponentProps>
) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const getVariants = (direction: string | any): Variants => {
    switch (direction) {
      case "left":
        return {
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        };
      case "top":
        return {
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        };
      case "bottom":
        return {
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        };
      default:
        return {
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={getVariants(props.direction)}
      className={props.classname}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedComponent;

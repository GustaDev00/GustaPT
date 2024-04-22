import gsap from "gsap";
import { useEffect, useRef } from "react";

const useAnimation = () => {
  const textRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const loadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.forEach((text, index) => {
        if (text) {
          gsap
            .to(text, {
              opacity: 1,
              display: "block",
              delay: index * 0.07,
              stagger: 0.2,
            })
            .then(() => {
              gsap.to(loadingRef.current, {
                display: "none",
                delay: 2.1,
                duration: 0.0001,
              });
            });
        }
      });
    }
  }, []);

  return {
    textRef,
    loadingRef,
  };
};

export default useAnimation;

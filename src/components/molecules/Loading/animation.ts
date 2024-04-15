import gsap from "gsap";
import { useEffect, useRef } from "react";

const useAnimation = () => {
  const textRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.forEach((text, index) => {
        if (text) {
          gsap.to(text, {
            opacity: 1,
            display: "block",
            delay: index * 0.07,
            stagger: 0.2,
          });
        }
      });
    }
  }, []);

  return {
    textRef,
  };
};

export default useAnimation;

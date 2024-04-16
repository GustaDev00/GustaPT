import gsap from "gsap";
import { useLanguageContext } from "@/Context/language";
import { useEffect, useRef } from "react";

const useAnimation = () => {
  const squaresRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { countLetter } = useLanguageContext();

  useEffect(() => {
    setTimeout(() => {
      if (squaresRef.current && containerRef.current) {
        squaresRef.current.forEach((square, index) => {
          const delay = Math.random();
          if (square) {
            gsap
              .to(square, {
                opacity: 1,
                delay: delay,
                duration: 0.1,
              })
              .then(() => {
                gsap.to(square, {
                  opacity: 0,
                  delay: 1,
                  duration: 0.01,
                });
              })
              .finally(() => {
                gsap.to(containerRef.current, {
                  display: "none",
                  delay: 2,
                  duration: 0.1,
                });
              });
          }
        });
      }
    }, countLetter * 110);
  });

  return {
    squaresRef,
    containerRef,
  };
};

export default useAnimation;

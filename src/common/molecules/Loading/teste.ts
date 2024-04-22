import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useLanguageContext } from "@/Context/language";

const useAnimation = () => {
  const textRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const { countLetter } = useLanguageContext();
  const squaresRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (textRef.current) {
      textRef.current.forEach((text, index) => {
        if (text) {
          gsap
            .to(text, {
              opacity: 1,
              display: "block",
              delay: index * 0.06,
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
    squaresRef,
    containerRef,
  };
};

export default useAnimation;

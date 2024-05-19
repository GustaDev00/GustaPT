import gsap from "gsap";
import { useEffect, useRef } from "react";

const useAnimation = () => {
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".section");

    sections.forEach((section, index) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: false,
          onEnter: () => {
            gsap.to(countRef.current, {
              y: -34.5 * index,
              duration: 0.5,
            });
          },
          onEnterBack: () => {
            gsap.to(countRef.current, {
              y: -34.5 * index,
              duration: 0.5,
            });
          },
        },
      });
    });
  }, [countRef]);

  return {
    countRef,
  };
};

export default useAnimation;

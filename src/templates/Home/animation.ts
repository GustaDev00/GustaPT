import { theme } from "@/styles/theme";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const useAnimation = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionBlueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef && navRef && sectionBlueRef) {
      gsap.to(navRef.current, {
        color: theme.color.cultured,
        borderColor: theme.color.cultured,
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionBlueRef.current,
          start: "top bottom-=90px",
          end: "center+=150px bottom-=20px",
          markers: false,
          toggleActions: "play reverse play reset",
        },
      });

      gsap.to(headerRef.current, {
        color: theme.color.cultured,
        borderColor: theme.color.cultured,
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionBlueRef.current,
          start: "top top+=30px",
          end: "center+=150px top+=50px",
          markers: false,
          toggleActions: "play reverse play reset",
        },
      });
    }
  }, [scrollRef, navRef, sectionBlueRef]);

  return {
    scrollRef,
    navRef,
    sectionBlueRef,
    headerRef,
  };
};

export default useAnimation;

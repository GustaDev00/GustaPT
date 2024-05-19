import { theme } from "@/styles/theme";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const useAnimation = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionBlueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef && sectionBlueRef) {
      gsap.to(navRef.current, {
        color: theme.color.cultured,
        borderColor: theme.color.cultured,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#services",
          start: "top bottom-=90px",
          end: "bottom-=50px bottom-=20px",
          markers: false,
          toggleActions: "play reverse play reset",
        },
      });

      gsap.to(headerRef.current, {
        color: theme.color.cultured,
        borderColor: theme.color.cultured,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#services",
          start: "top top+=30px",
          end: "bottom-=50px top+=50px",
          markers: false,
          toggleActions: "play reverse play reset",
        },
      });
    }
  }, [navRef, sectionBlueRef]);

  return {
    navRef,
    sectionBlueRef,
    headerRef,
  };
};

export default useAnimation;

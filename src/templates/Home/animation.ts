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
      const sections = gsap.utils.toArray<HTMLElement>(".section");

      sections.forEach((section, index) => {
        console.log(section, index, "section");
        gsap.to(scrollRef.current, {
          scrollTrigger: {
            trigger: section,
            start: "top top+=100px",
            end: "bottom bottom",
            onEnter: () => {
              gsap.to(scrollRef.current, {
                y: -20,
                opacity: 0,
                onComplete: () => {
                  if (scrollRef.current) {
                    scrollRef.current.innerText = String(index + 2);
                    gsap.fromTo(scrollRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1 });
                  }
                },
              });
            },
            onEnterBack: () => {
              gsap.to(scrollRef.current, {
                y: 20,
                opacity: 0,
                onComplete: () => {
                  if (scrollRef.current) {
                    scrollRef.current.innerText = String(index + 1);
                    gsap.fromTo(scrollRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1 });
                  }
                },
              });
            },
          },
        });
      });

      gsap.to(navRef.current, {
        color: theme.color.cultured,
        borderColor: theme.color.cultured,
        scrollTrigger: {
          trigger: sectionBlueRef.current,
          start: "top bottom-=90px",
          end: "bottom bottom-=20px",
          markers: false,
          toggleActions: "play reverse play reset",
        },
      });

      gsap.to(headerRef.current, {
        color: theme.color.cultured,
        borderColor: theme.color.cultured,
        scrollTrigger: {
          trigger: sectionBlueRef.current,
          start: "top top+=30px",
          end: "bottom top+=50px",
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

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const useAnimation = () => {
  const up = useRef<HTMLDivElement | null>(null);
  const down = useRef<HTMLDivElement | null>(null);
  const up2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(up.current, { duration: 18, y: "-90%", ease: "power1" })
      .to(down.current, { duration: 18, y: "90%", ease: "power1" }, "<")
      .to(up2.current, { duration: 30, y: "-90%", ease: "power1" }, "<");
  }, []);

  return { up, down, up2 };
};

export default useAnimation;

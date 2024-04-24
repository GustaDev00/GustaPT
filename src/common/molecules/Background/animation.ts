import gsap from "gsap";
import { useEffect, useRef } from "react";

const useAnimation = () => {
  const up = useRef<HTMLDivElement | null>(null);
  const down = useRef<HTMLDivElement | null>(null);
  const upSlow = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!up.current || !down.current || !upSlow.current) return;

    setTimeout(() => {
      gsap.to(up.current, {
        y: "-50%",
        repeat: -1,
        duration: 140,
        ease: "none",
      });

      gsap.to(upSlow.current, {
        y: "-50%",
        repeat: -1,
        duration: 180,
        ease: "none",
      });

      gsap.to(down.current, {
        y: "50%",
        repeat: -1,
        duration: 140,
        ease: "none",
      });
    }, 2000);
  }, []);

  return {
    up,
    down,
    upSlow,
  };
};

export default useAnimation;

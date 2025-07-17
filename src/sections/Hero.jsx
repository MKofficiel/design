import { SplitText } from "gsap/all";
import Button from "../components/Button";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const Hero = () => {
  const titleRef = useRef();
  const textRef = useRef();
  const btnRef = useRef();
  const heroImageRef = useRef();

  useGSAP(() => {
    const TLFADE = gsap.timeline();

    TLFADE.to(titleRef.current, { autoAlpha: 1, y: 0, delay: 0.2 })
      .to(textRef.current, { autoAlpha: 1, y: 0 }, "-=0.2")
      .to(btnRef.current, { autoAlpha: 1, y: 0 }, "-=0.2")
      .to(heroImageRef.current, {
        autoAlpha: 1,
        x: 0,
        ease: "power3",
      });
  }, []);
  return (
    <section className="md:px-6">
      <div className="bg-peach relative container w-full overflow-hidden md:rounded-[15px] lg:pt-[20px]">
        <div className="flex flex-col items-center gap-[80px] px-[95px] pt-[80px] max-md:px-6 max-md:pt-20 min-[1025px]:flex-row min-[1025px]:items-start min-[1025px]:pt-[145px] lg:justify-between">
          {/* Hero Text */}

          <div className="relative z-2 mx-auto max-w-[573px] text-center min-[1025px]:mx-0 min-[1025px]:text-left lg:max-w-[540px]">
            <h1
              ref={titleRef}
              className="mb-6 translate-y-[-20px] text-[32px] leading-[36px] tracking-normal text-white opacity-0 lg:text-[48px] lg:leading-[48px]"
            >
              Award-winning custom designs and digital branding solutions
            </h1>
            <p
              ref={textRef}
              className="subtitle mx-auto mb-8 translate-y-[-20px] text-[15px] leading-[25px] text-white opacity-0 min-[1025px]:mx-0 md:max-w-[445px] md:text-[16px] md:leading-[26px] lg:mb-[40px]"
            >
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Button ref={btnRef} className="translate-y-[-20px] opacity-0">
              Learn more
            </Button>
          </div>

          {/* Hero Image */}
          <div
            ref={heroImageRef}
            className="translate-x-[200px] overflow-hidden opacity-0 max-lg:max-h-[387px] lg:-mb-[100px]"
          >
            <img
              src="/assets/home/desktop/hero.png"
              height={573}
              width={284}
              alt="hero image"
            />
          </div>

          <div className="absolute left-0 h-full w-full bg-[url('/src/assets/home/desktop/bg-pattern-hero-home.svg')] bg-cover bg-no-repeat max-lg:-right-[17%] max-lg:mt-[40px] max-sm:top-[102px] max-sm:right-0 max-sm:mt-0 md:top-1/2 md:left-auto md:h-[640px] md:w-[640px] md:-translate-y-1/2 lg:right-0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

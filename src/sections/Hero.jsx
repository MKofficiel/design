import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="md:px-6">
      <div className="bg-peach relative container w-full overflow-hidden md:rounded-[15px]">
        <div className="flex flex-col items-center gap-[80px] px-[95px] max-lg:pt-[80px] max-md:px-6 max-md:pt-20 min-[1025px]:flex-row min-[1025px]:items-start lg:justify-between lg:pt-[145px]">
          {/* Hero Text */}

          <div className="mx-auto max-w-[573px] text-center min-[1025px]:mx-0 min-[1025px]:text-left lg:max-w-[540px]">
            <h1 className="mb-6 text-[32px] leading-[36px] tracking-normal text-white lg:text-[48px] lg:leading-[48px]">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="mx-auto mb-8 text-[15px] leading-[25px] text-white min-[1025px]:mx-0 md:max-w-[445px] md:text-[16px] md:leading-[26px] lg:mb-[40px]">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Button>Learn more</Button>
          </div>

          {/* Hero Image */}
          <div className="overflow-hidden max-lg:max-h-[387px] lg:-mb-[100px]">
            {/* <img
              src="/src/assets/home/desktop/image-hero-phone.png"
              alt="hero image"
              className="w-full"
            /> */}
            <img
              src="/src/assets/home/desktop/hero.png"
              height={573}
              width={284}
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

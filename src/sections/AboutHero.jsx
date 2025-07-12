import ResponsiveImage from "../components/ResponsiveImage";

const AboutHero = () => {
  return (
    <section>
      <div className="container px-6 max-md:px-0 lg:px-0">
        <div className="bg-peach flex flex-col overflow-hidden md:rounded-[15px] lg:flex-row">
          {/* IMAGE ABOUT HERO */}
          <div>
            <ResponsiveImage
              mobileSrc="/assets/about/mobile/image-about-hero.jpg"
              tabletSrc="/assets/about/tablet/image-about-hero.jpg"
              desktopSrc="/assets/about/desktop/image-about-hero.jpg"
              alt="hero about"
              className="h-auto w-full"
            />
          </div>
          {/* TEXT BOX  */}
          <div className="flex-[70%] px-6 py-[80px] max-lg:text-center lg:-order-1 lg:flex lg:items-center lg:px-[95px]">
            <div>
              <h1>About us</h1>
              <p className="text-[15px] leading-[25px] text-white">
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We’ve partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We’re always looking forward to creating brands,
                products, and digital experiences that connect with our clients’
                audiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

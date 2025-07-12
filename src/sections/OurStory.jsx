import ResponsiveImage from "../components/ResponsiveImage";

const OurStory = () => {
  return (
    <section className="md:px-6 md:py-[120px] lg:py-[160px]">
      <div className="bg-peach-white container overflow-hidden md:rounded-[15px]">
        <div className="md:flex md:flex-col md:gap-6 lg:flex-row lg:gap-0">
          {/* IMAGE BOX */}
          <div>
            <ResponsiveImage
              desktopSrc="/assets/about/desktop/image-world-class-talent.jpg"
              tabletSrc="/assets/about/tablet/image-world-class-talent.jpg"
              mobileSrc="/assets/about/mobile/image-world-class-talent.jpg"
              className="w-full"
            />
          </div>
          {/* TEXT BOX */}
          <div className="max-lg:mx-auto max-lg:px-6 max-lg:py-[68px] max-lg:text-center max-md:py-[80px] lg:flex lg:flex-1 lg:items-center lg:px-[80px]">
            <div>
              <h2 className="text-peach mb-6 text-[32px] leading-[36px] font-medium">
                World-class talent
              </h2>
              <p className="leading-[25px mb-6 text-[15px]">
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
              </p>
              <p className="text-[15px] leading-[25px]">
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand’s story and mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

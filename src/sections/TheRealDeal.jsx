import ResponsiveImage from "../components/ResponsiveImage";

const TheRealDeal = () => {
  return (
    <section className="max-lg:pb-[120px] md:px-6 lg:py-[120px]">
      <div className="bg-peach-white container overflow-hidden md:rounded-[15px]">
        <div className="md:flex md:flex-col md:gap-6 lg:flex-row lg:gap-0">
          {/* IMAGE BOX */}
          <div>
            <ResponsiveImage
              desktopSrc="/assets/about/desktop/image-real-deal.jpg"
              tabletSrc="/assets/about/tablet/image-real-deal.jpg"
              mobileSrc="/assets/about/mobile/image-real-deal.jpg"
              className="w-full"
            />
          </div>
          {/* TEXT BOX */}
          <div className="max-lg:mx-auto max-lg:px-6 max-lg:py-[68px] max-lg:text-center max-md:py-[80px] lg:-order-1 lg:flex lg:flex-1 lg:items-center lg:px-[80px]">
            <div>
              <h2 className="text-peach mb-6 text-[32px] leading-[36px] font-medium">
                The real deal
              </h2>
              <p className="leading-[25px mb-6 text-[15px]">
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p className="text-[15px] leading-[25px]">
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheRealDeal;

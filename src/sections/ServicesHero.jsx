const ServicesHero = ({ title, description }) => {
  return (
    <section className="pb-[120px] max-md:pb-[96px] md:px-6">
      <div className="bg-peach container md:rounded-[15px]">
        <div className="py-[64px] text-center max-md:px-6 max-md:py-[105px]">
          <div>
            <h1 className="">{title}</h1>
            <p className="mx-auto max-w-[400px] text-[16px] leading-[26px] text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

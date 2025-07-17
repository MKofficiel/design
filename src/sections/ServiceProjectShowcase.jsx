const ServiceProjectShowcase = ({ projects }) => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 px-6 max-md:gap-y-[40px] md:gap-y-8 lg:grid-cols-3 lg:gap-x-[30px]">
          {projects.map(({ title, subtitle, image }) => (
            <div key={title}>
              <div className="bg-peach-white grid h-full grid-cols-1 items-center gap-x-[32px] overflow-hidden rounded-[15px] md:grid-cols-2 lg:grid-cols-1">
                <div className="h-full w-full">
                  <img src={image} alt={title} className="h-full w-full" />
                </div>
                <div className="px-[30px] py-[32px] md:px-[40px]">
                  <h2 className="text-peach mb-4 text-center text-[20px] font-medium tracking-[5px] uppercase">
                    {title}
                  </h2>
                  <p className="text-center text-[16px] leading-[26px]">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProjectShowcase;

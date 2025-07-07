import { traits } from "../constants";

const Values = () => {
  return (
    <section className="pb-[160px] max-md:pb-[120px] max-sm:pb-[67px]">
      <div className="container max-lg:px-6">
        <div className="grid grid-cols-1 gap-[80px] md:gap-[32px] lg:grid-cols-3 lg:gap-x-[30px]">
          {traits.map(({ title, img, text }) => (
            <div
              key={title}
              className="flex flex-col items-center max-sm:text-center md:flex-row md:gap-[48px] md:text-left lg:flex-col lg:text-center"
            >
              <div className="bg-gradient-home mb-[48px] flex size-[202px] items-center justify-center rounded-full md:mb-0">
                <img
                  src={img}
                  alt="illustration icon"
                  className="h-[162px] w-[188px]"
                />
              </div>

              <div className="flex-1">
                <h3 className="mb-8 text-[20px] leading-[26px] font-medium tracking-[5px] uppercase md:mb-4">
                  {title}
                </h3>
                <p className="text-[16px] leading-[26px]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

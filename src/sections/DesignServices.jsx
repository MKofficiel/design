import clsx from "clsx";
import { services } from "../constants";
import { Link } from "react-router";

const DesignServices = () => {
  return (
    <section className="py-[120px] lg:py-[160px]">
      <div className="container">
        <div className="grid h-full w-full grid-cols-1 gap-y-[24px] px-6 lg:grid-cols-2 lg:gap-x-6 lg:px-0">
          {services.map(({ title, slug, to, img }) => (
            <Link
              key={to}
              to={`/${to}`}
              className={clsx(
                "group relative z-10 w-full cursor-pointer overflow-hidden first:lg:row-start-1 first:lg:row-end-3",
              )}
            >
              {/* IMAGE CARD */}
              <picture className="block h-full w-full">
                <source srcSet={img.desktop} media="(min-width:1024px)" />
                <source srcSet={img.tablet} media="(min-width:640px)" />
                <img
                  src={img.mobile}
                  alt=""
                  className="h-full w-full rounded-[15px]"
                />
              </picture>

              <div className="absolute top-1/2 left-1/2 z-30 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div className="flex flex-col items-center">
                  <h2 className="mb-3 text-[28px] leading-[36px] font-medium tracking-[1.4px] uppercase">
                    {title}
                  </h2>
                  <div
                    to={to}
                    className="flex items-center gap-4 text-[15px] font-medium tracking-[5px] uppercase"
                  >
                    <span>View project</span>
                    <span>
                      <img
                        src="/assets/shared/desktop/icon-right-arrow.svg"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="group-hover:bg-peach/60 absolute inset-0 rounded-[15px] bg-black/70 duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignServices;

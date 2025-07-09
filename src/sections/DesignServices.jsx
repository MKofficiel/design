import clsx from "clsx";
import { services } from "../constants";
import { Link } from "react-router";

const DesignServices = () => {
  const bgClasses = {
    "web-design": "bg-web-design",
    "app-design": "bg-app-design",
    "graphic-design": "bg-graphic-design",
  };
  return (
    <section className="py-[120px] lg:py-[160px]">
      <div className="container">
        <div className="grid h-full w-full grid-cols-1 gap-y-[24px] px-6 lg:grid-cols-2 lg:gap-x-6 lg:px-0">
          {/* <div className="bg-yellow-100 lg:row-start-1 lg:row-end-3">
            GRID 1
          </div>
          <div className="bg-green-400">GRID 2 </div>
          <div className="bg-black">GRID-3</div> */}
          {services.map(({ title, slug, to, img }) => (
            <div
              key={to}
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
              {/* src\assets\shared\desktop\icon-right-arrow.svg */}
              <div className="absolute top-1/2 left-1/2 z-30 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div className="flex flex-col items-center">
                  <h2 className="mb-3 text-[28px] leading-[36px] font-medium tracking-[1.4px] uppercase">
                    {title}
                  </h2>
                  <Link
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
                  </Link>
                </div>
              </div>

              <div className="group-hover:bg-peach/60 absolute inset-0 rounded-[15px] bg-black/70 duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignServices;

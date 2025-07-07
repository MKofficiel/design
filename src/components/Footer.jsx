import { Link } from "react-router";
import { navLinks, socialsIcon } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-background-black -mt-[70px] pt-[144px] pb-[72px] max-lg:pt-[166px] max-lg:pb-[80px] max-md:-mt-[189px] max-md:pt-[253px] max-md:pb-[64px]">
      <div className="container max-lg:px-6">
        <div className="grid grid-cols-1 max-md:gap-y-[40px] max-md:text-center md:grid-cols-3 md:gap-y-[72px]">
          <div className="relative md:col-span-3">
            {/* NAVIGATION */}
            <div className="flex max-md:flex-col max-md:items-center max-md:gap-[32px] md:justify-between">
              {/* src\assets\shared\desktop\logo-light.png */}

              <Link>
                <img
                  src="src/assets/shared/desktop/logo-light.png"
                  alt="logo"
                  width={157}
                  height={27}
                />
              </Link>
              <nav>
                <ul className="flex flex-col gap-8 md:flex-row">
                  {navLinks.map(({ label, path }) => (
                    <li key={label} className="group relative">
                      <Link
                        to={path}
                        className="text-sm leading-[14px] tracking-[2px] text-white uppercase"
                      >
                        {label}

                        <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="bg-light-grey absolute top-[40px] h-[1px] w-full md:top-[70px]" />
          </div>
          <div className="">
            <div>
              <p className="text-[16px] leading-[26px] text-white/50">
                <span className="block font-bold">Designo Central Office</span>
                <span className="block">3886 Wellington Street</span>
                Toronto, Ontario M9C 3J5
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-[16px] leading-[26px] text-white/50">
              <span className="block font-bold">
                Contact Us (Central Office)
              </span>
              <span className="block">P : +1 253-863-8967</span>
              <span>M : contact@designo.co</span>
            </p>
          </div>

          <div className="h-full w-full">
            <ul className="flex h-full w-full items-center justify-center gap-[16px] md:items-end md:justify-end">
              {socialsIcon.map(({ icon }) => (
                <li key={icon} className="cursor-pointer">
                  <img src={icon} alt="socials logo" className="size-[24px]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

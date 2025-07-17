import { useRef, useState } from "react";
import { Link } from "react-router";
import { navLinks } from "../constants";
import clsx from "clsx";
import Backdrop from "./Backdrop";
import { useLockBodyScroll } from "../hooks/useLockBody";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkRefs = useRef([]);
  const logoRef = useRef();
  const btnHamburgerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    (tl
      .to(logoRef.current, { autoAlpha: 1, y: 0, delay: 0.5 })
      .to(btnHamburgerRef.current, { autoAlpha: 1, y: 0 }, "-=0.2")
      .to(linkRefs.current, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.3,
      }),
      "-=0.2");
  }, []);

  useLockBodyScroll(isOpen);
  return (
    <header className="relative z-[999] md:pb-[16px]">
      <div className="relative z-30 container px-6 max-md:flex max-md:px-[24px] lg:px-0">
        <div className="flex h-[96px] items-center max-md:w-full max-md:justify-between">
          <div className="items-center max-md:flex max-md:h-full">
            <Link
              ref={logoRef}
              to="/"
              className="translate-y-[-60px] opacity-0"
            >
              <img
                src="/assets/shared/desktop/logo-dark.png"
                alt="logo"
                className="max-md:h-[27px] max-md:w-[157px]"
                width={202}
                height={27}
              />
            </Link>
          </div>
          {/* Navigation */}
          {/* BACKDROP */}

          <div
            className={clsx(
              "z-10 flex flex-1 justify-end transition-opacity max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:justify-start max-md:bg-black max-md:opacity-0 max-md:duration-300",
              isOpen ? "max-md:opacity-100" : "max-md:pointer-events-none",
            )}
          >
            <nav className="max-md:px-[24px] max-md:py-[48px]">
              <ul className="flex items-center gap-[42px] max-md:flex-col max-md:items-start">
                {navLinks.map(({ label, path }, index) => (
                  <li
                    key={label}
                    ref={(el) => (linkRefs.current[index] = el)}
                    className="translate-y-[-60px] opacity-0"
                  >
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className="group relative text-sm tracking-[2px] uppercase max-md:text-[24px] max-md:text-white"
                    >
                      {label}

                      <span className="bg-dark-grey absolute -bottom-0.5 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <button
            ref={btnHamburgerRef}
            onClick={() => setIsOpen((prev) => !prev)}
            className="translate-y-[-60px] cursor-pointer opacity-0 md:hidden"
          >
            <img
              src={`/assets/shared/mobile/icon-${isOpen ? "close" : "hamburger"}.svg`}
              alt=""
            />
          </button>
        </div>
      </div>
      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
    </header>
  );
};

export default Header;

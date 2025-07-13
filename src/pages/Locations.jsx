import clsx from "clsx";
import { localisations } from "../constants";

const Locations = () => {
  return (
    <section className="pb-[120px] md:px-6">
      <div className="container">
        <div className="grid h-full w-full grid-cols-1 gap-y-[120px] lg:gap-y-[32px]">
          {localisations.map(
            ({ country, officeName, addressLines, contact, image }, index) => (
              <div
                key={country}
                className="grid max-lg:grid-rows-2 md:gap-y-[24px] lg:grid-cols-3 lg:gap-x-[30px] md:[&>div]:overflow-hidden md:[&>div]:rounded-[15px]"
              >
                {/* IMAGE CARD */}

                <div
                  className={clsx(
                    "",
                    index === 0 || index === localisations.length - 1
                      ? "lg:order-2"
                      : "",
                  )}
                >
                  <picture className="">
                    {/* <source media="(min-width:1024px)" srcSet={image.desktop} />
                    <img
                      src={image.small}
                      alt={`${country} image`}
                      className="h-full w-full object-cover object-top-right"
                    /> */}
                    <source media="(min-width:1024px)" srcSet={image.desktop} />
                    <source media="(min-width:768px)" srcSet={image.small} />
                    <img
                      src={image.small}
                      alt="Description"
                      className="h-full w-full object-cover"
                    />
                  </picture>
                </div>

                {/* TEXT CARD */}

                <div className="bg-peach-white flex h-full w-full items-center max-md:py-[80px] max-md:text-center lg:col-span-2 lg:py-[80px]">
                  <div className="flex flex-1 px-[75px] max-md:flex-col max-md:gap-6">
                    <div className="flex-1">
                      <h2 className="text-peach mb-6 text-[32px] leading-[36px] font-medium tracking-normal">
                        {country}
                      </h2>

                      <p className="text-[15px] leading-[25px]">
                        <span className="block font-bold">{officeName}</span>
                        <span className="block">{addressLines.at(0)}</span>{" "}
                        {addressLines.at(1)}
                      </p>
                    </div>
                    <div className="flex-1 items-end md:flex">
                      <div className="text-[15px] leading-[25px]">
                        <span className="font-bold">Contact</span>
                        <p>
                          <a href={`tel:${contact.phone}`}>
                            P : {contact.phone}
                          </a>
                        </p>
                        <p>
                          <a href={`tmailto:${contact.email}`}>
                            M : {contact.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Locations;

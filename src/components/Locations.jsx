import { locations } from "../constants";
import Button from "./Button";

const Locations = () => {
  return (
    <section className="max-lg:pb-[120px] max-md:pt-[120px]">
      <div className="container">
        <div className="lg:px-[70px]">
          <ul className="flex items-center max-lg:flex-col max-lg:gap-[48px] lg:justify-between">
            {locations.map(({ country, image }) => (
              <li key={country}>
                <div className="flex flex-col items-center gap-[48px]">
                  <div className="background-gradient flex size-[202px] items-center justify-center rounded-full">
                    <img src={image} alt={country} />
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="mb-8 text-[20px] leading-[26px] font-medium tracking-[5px] uppercase">
                      {country}
                    </h2>
                    <Button to="location" variant="secondary" replace>
                      See location
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Locations;

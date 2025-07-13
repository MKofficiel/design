const Locations = () => {
  return (
    <section>
      <div className="container">
        <div className="grid gap-6 max-sm:gap-0 lg:grid-cols-3">
          <div className="h-[320px] w-[375px] bg-rose-400">
            <img
              src="/assets/locations/tablet/image-map-canada.png"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full bg-yellow-200 lg:-order-1 lg:col-span-2">
            <div className="bg-peach-white mx-auto w-full px-6 py-[80px] max-md:text-center md:flex md:items-end md:px-[75px] md:py-[88px]">
              <div className="md:flex-1">
                <h2 className="text-peach mb-6 text-[32px] leading-[36px] font-medium tracking-normal">
                  Canada
                </h2>

                <p className="text-[15px] leading-[25px]">
                  <span className="block font-bold">
                    Designo central office
                  </span>
                  <span className="block">3886 Wellington Street</span> Toronto,
                  Ontario M9C 3J5
                </p>
              </div>
              <div className="md:flex-1">
                <div className="text-[15px] leading-[25px]">
                  <span className="font-bold">Contact</span>
                  <p>
                    <a href="+1 253-863-8967">P : +1 253-863-8967</a>
                  </p>
                  <p>
                    <a href="">M : contact@designo.co</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-300 max-sm:mt-[120px]">
            <img
              src="/assets/locations/tablet/image-map-canada.png"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full bg-red-600 lg:col-span-2">
            {" "}
            <div className="bg-peach-white mx-auto w-full px-6 py-[80px] max-md:text-center md:flex md:items-end md:px-[75px] md:py-[88px]">
              <div className="md:flex-1">
                <h2 className="text-peach mb-6 text-[32px] leading-[36px] font-medium tracking-normal">
                  Canada
                </h2>

                <p className="text-[15px] leading-[25px]">
                  <span className="block font-bold">
                    Designo central office
                  </span>
                  <span className="block">3886 Wellington Street</span> Toronto,
                  Ontario M9C 3J5
                </p>
              </div>
              <div className="md:flex-1">
                <div className="text-[15px] leading-[25px]">
                  <span className="font-bold">Contact</span>
                  <p>
                    <a href="+1 253-863-8967">P : +1 253-863-8967</a>
                  </p>
                  <p>
                    <a href="">M : contact@designo.co</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black max-sm:mt-[120px] lg:order-7">
            <img
              src="/assets/locations/tablet/image-map-canada.png"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="lg:order-5 lg:col-span-2">
            <div className="bg-peach-white mx-auto w-full py-[80px] max-md:text-center md:flex md:items-end md:px-[75px] md:py-[88px]">
              <div className="md:flex-1">
                <h2 className="text-peach mb-6 text-[32px] leading-[36px] font-medium tracking-normal">
                  Canada
                </h2>

                <p className="text-[15px] leading-[25px]">
                  <span className="block font-bold">
                    Designo central office
                  </span>
                  <span className="block">3886 Wellington Street</span> Toronto,
                  Ontario M9C 3J5
                </p>
              </div>
              <div className="md:flex-1">
                <div className="text-[15px] leading-[25px]">
                  <span className="font-bold">Contact</span>
                  <p>
                    <a href="+1 253-863-8967">P : +1 253-863-8967</a>
                  </p>
                  <p>
                    <a href="">M : contact@designo.co</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;

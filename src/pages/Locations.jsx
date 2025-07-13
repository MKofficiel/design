const Locations = () => {
  return (
    <section>
      <div className="container">
        <div className="grid h-full grid-cols-1 gap-y-[120px] md:px-6">
          <div className="md:grid md:grid-cols-1 md:gap-y-6 lg:grid-cols-[auto_1fr]">
            <div className="lg:order-2">
              <img
                src="/assets/locations/tablet/image-map-canada.png"
                className="w-full md:h-[326px]"
                alt=""
              />
            </div>
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
          <div className="bg-green-400">grid 1</div>
          <div className="bg-yellow-400">grid 1</div>
        </div>
      </div>
    </section>
  );
};

export default Locations;

import Button from "../components/Button";

const CTA = () => {
  return (
    <section className="relative max-lg:px-6">
      <div className="bg-peach container rounded-[15px] px-6 py-[64px] lg:px-[95px]">
        <div className="flex flex-col items-center gap-[40px] lg:flex-row lg:justify-between">
          <div className="text-white max-lg:text-center">
            <h2 className="mb-5 text-[32px] leading-[36px] font-medium tracking-normal md:text-[40px] md:leading-[40px]">
              <span className="block">Let’s talk about </span>
              <span>your project</span>
            </h2>
            <p className="text-[15px] leading-[25px] md:max-w-[422px] lg:text-[16px] lg:leading-[26px]">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div>
            <Button to="contact">Get in touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

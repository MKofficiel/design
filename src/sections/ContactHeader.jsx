import Button from "../components/Button";

const ContactHeader = () => {
  return (
    <section className="pb-[160px] max-lg:pb-[120px] md:px-6">
      <div className="bg-peach border-raduis container max-lg:py-[72px] md:px-6 lg:px-[95px]">
        <div className="flex max-lg:max-w-[573px] max-lg:flex-col max-lg:px-6 max-md:gap-[48px] md:mx-auto md:gap-[40px] lg:items-center lg:space-x-[40px] lg:py-[55px]">
          <div className="max-md:text-center lg:flex-1">
            <h1>Contact Us</h1>
            <p className="text-[15px] leading-[25px] text-white md:text-[16px] md:leading-[26px]">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <form className="flex flex-col items-center gap-[40px] md:items-end md:gap-[24px] lg:flex-1">
            <div className="flex w-full flex-col gap-[25px]">
              <div className="group relative w-full">
                <input type="text" className="input" placeholder="Name" />
                <div className="absolute h-[1px] w-full bg-white transition-all duration-500 group-focus-within:h-[2px] group-hover:h-[2px]" />
              </div>
              <div className="group relative w-full">
                <input
                  type="text"
                  className="input"
                  placeholder="Email Address"
                />
                <div className="absolute h-[1px] w-full bg-white transition-all duration-500 group-focus-within:h-[2px] group-hover:h-[2px]" />
              </div>
              <div className="group relative w-full">
                <input type="text" className="input" placeholder="Phone" />
                <div className="absolute h-[1px] w-full bg-white transition-all duration-500 group-focus-within:h-[2px] group-hover:h-[2px]" />
              </div>
              <div className="group relative w-full">
                <textarea
                  name=""
                  className="input w-full resize-none"
                  rows="4"
                  placeholder="Your message"
                  id=""
                ></textarea>
                <div className="absolute h-[1px] w-full bg-white transition-all duration-500 group-focus-within:h-[2px] group-hover:h-[2px]" />
              </div>
            </div>
            <Button className="w-[152px] text-center">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;

import React from "react";

function ContactForm() {
  return (
    <div className="relative flex justify-center items-center">
      
      <form action="https://formsubmit.co/3eb90342a33563ddc936921fdb53668a" method="POST" className="relative bg-black border-2 border-white flex flex-col justify-center items-center w-[340px] h-auto rounded-[20px] mx-[37px] mt-[95px] dark:text-white md:w-[1146px] h-auto mt-[157px] mx-[147px]">
      <img
        className="animate-pulse w-[106px] absolute top-[-50px] left-[40px] z-[1] md:top-[-50px] left-[-40px]"
        src="./Graphics/pattern.svg"
        />
        <img
        className="animate-pulse w-[106px] absolute top-[500px] right-[40px] z-[1] md:top-[485px] right-[-40px]"
        src="./Graphics/pattern.svg"
        />
        <input type="hidden" name="_template" value="box"></input>
        <input type="hidden" name="_subject" value="New Portfolio Webpage Enquiry!"></input>
        <input type="hidden" name="_autoresponse" value="Thank you for stopping by, your email will be responded to asap!"></input>
        <div className="flex grid grid-cols-1 mx-[44px] mt-[11px] w-[251px] md:w-[789px] mt-[24px]  mx-[179px]">
          <div className="">
            <label
              for="first-name"
              className="block mt-[53px] text-[20px] font-bold  leading-6 text-white"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="full-name"
                id="full-name"
                placeholder="Please input your full name"
                autocomplete="full-name"
                className="block bg-black border-b border-amber-500 w-full rounded-20 border-0 px-3.5 py-2 text-white shadow-sm  focus:ring-2 focus:ring-inset focus:ring-amber-500"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              for="email"
              className="block text-[20px] font-bold leading-6 text-white mt-[27px]"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Please input your e-mail address"
                autocomplete="email"
                className="block bg-black border-b border-amber-500 w-full rounded-20 border-0 px-3.5 py-2 text-white shadow-sm  focus:ring-2 focus:ring-inset focus:ring-amber-500"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              for="message"
              className="block text-[20px] font-bold leading-6 text-white mt-[27px]" 
            >
              Your message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                placeholder="Please enter your message"
                rows="4"
                className="block h-auto bg-black border-b border-amber-500 w-full rounded-20 border-0 px-3.5 py-2 text-white shadow-sm  focus:ring-2 focus:ring-inset focus:ring-amber-500 h-auto"
                required
              ></textarea>
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center"></div>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className=" cursor-pointer block w-full rounded-20 bg-amber-500 w-[77px] h-[30px] mt-[24px] mb-[20px] text-center text-[20px] font-bold text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 md:w-[142px] h-[46px] mt-[32px]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

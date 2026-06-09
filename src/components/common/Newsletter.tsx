import emailIcon from "../../assets/icons/email.png";

const Newsletter = () => {
  return (
    <section className="w-full bg-gray-100">
      <div className="mx-auto max-w-360 px-4 py-10">
        <div className="mx-auto flex max-w-155 flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-[20px] font-semibold text-gray-900">
            Subscribe on our newsletter
          </h2>

          {/* Description */}
          <p className="mt-2 text-[16px] text-gray-600">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>

          {/* Form */}
          <form className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
            {/* Input */}
            <div className="relative flex-1">
              <img
                alt="Email"
                src={emailIcon}
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

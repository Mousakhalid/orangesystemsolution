import React from "react";

const Responsibilities = () => {
  return (
    <div
      className="bg-[url('/images/bg-img.jpg')] md:mx-24 mx-4 object-contain  bg-cover bg-center bg-no-repeat h-full sm:rounded rounded md:p-48 p-4"
      style={{ boxShadow: "inset 0 0 0 2000px rgba(255, 0, 150, 0.4)" }}
    >
      <div className="text-white gap-x-8">
        <h1 className="font-normal text-xl md:my-3 my-5">
          CORPORATE AND SOCIAL RESPONSIBILITIES
        </h1>
        <h2 className="font-bold text-5xl ">
          We all want a better future. Together, we can make a difference.
        </h2>
        <p className="text-normal my-5">
          Our commitment towards innovation and providing greater services to
          our customers is second to none. This philosophy of excelling in
          everything we do has enabled us to not only fulfill our environmental
          sense of responsibility, but go further beyond. We acknowledge global
          climate change as a real problem, and as a borderless company, we
          pledge to do everything in our capacity to tackle the problem. To that
          end, we ensure that we eliminate wasteful practices and make all our
          processes as energy efficient as possible.
        </p>
        <button className="border text-bold px-4 py-3 rounded-xl hover:bg-black hover:border-none duration-500">
          Download Profile
        </button>
      </div>
    </div>
  );
};

export default Responsibilities;

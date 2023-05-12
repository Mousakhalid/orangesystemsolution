import Image from "next/image";
import React from "react";

const Hire = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-9 md:mx-12 mx-12 mb-12">
      <div className="bg-gradient-to-r from-pink-500 to-orange-500  p-5  rounded-lg justify-center flex flex-col">
        <h1 className="text-white font-bold text-xl pt-3 mt-4">
          HIRE A TOP TALENT
        </h1>
        <p className="text-gray-100 font-extrabold text-3xl pt-5 mb-16">
          Hire our best team to increase your business
        </p>
      </div>
      <div className="p-5 bg-white border rounded hover:bg-gradient-to-r from-orange-700 to-pink-500 hover:rounded-lg duration-500 hover:text-white ">
        <Image
          src="/images/web.svg"
          alt="Cards IMages"
          width={90}
          height={90}
        />
        <h2 className="font-bold text-xl pt-3 my-4">Hire a Web Developer</h2>
        <p className="">
          Exploring a reliable software development company? You’re at the right
          place. Hire a Developer now, we at Orange System Solutions comprise
          secure software solutions for any device, browser and OS.
        </p>
      </div>
      <div className="p-5 bg-white border rounded hover:bg-gradient-to-r from-orange-700 to-pink-500 hover:rounded-lg duration-500 hover:text-white ">
        <Image
          src="/images/app.png"
          alt="Cards IMages"
          width={90}
          height={90}
        />
        <h2 className="font-bold text-xl pt-3 my-4">Hire a App Developer</h2>
        <p className="">
          Our skilled app developer can help you create an innovative and
          user-friendly mobile or web application that meets your company’s
          needs. Build custom apps from scratch or modify existing ones.
        </p>
      </div>
      <div className="p-5 bg-white border rounded hover:bg-gradient-to-r from-orange-700 to-pink-500 hover:rounded-lg duration-500 hover:text-white ">
        <Image
          src="/images/mar.png"
          alt="Cards IMages"
          width={90}
          height={90}
        />
        <h2 className="font-bold text-xl pt-3 my-4">Hire a Digital Marketer</h2>
        <p>
          Hire an expert digital marketer specializing in email, content,
          inbound, social media, SEO, PR and PPC. We deliver top-performing
          marketers to fulfill your needs.
        </p>
      </div>
      <div className="p-5 bg-white border rounded hover:bg-gradient-to-r from-orange-700 to-pink-500 hover:rounded-lg duration-500 hover:text-white ">
        <Image src="/images/ui.png" alt="Cards IMages" width={90} height={90} />
        <h2 className="font-bold text-xl pt-3 my-4">Hire a UI/UX Designer</h2>
        <p>
          Hire UI/UX designers to develop responsive pages and select the set of
          interactive elements to be displayed. We comprise skilled UI/UX
          engineers with a thorough knowledge of HTML and CSS.
        </p>
      </div>
      <div className="p-5 bg-white border rounded hover:bg-gradient-to-r from-orange-700 to-pink-500 hover:rounded-lg duration-500 hover:text-white ">
        <Image
          src="/images/seo.png"
          alt="Cards IMages"
          width={90}
          height={90}
        />
        <h2 className="font-bold text-xl pt-3 my-4">Hire a SEO specialist</h2>
        <p>
          Hire SEO Experts to Get Higher Rankings in SERPs. As a professional
          SEO company in the market, we are aligned to deliver qualitative SEO
          services to assist you in getting top traffic leads and sales.{" "}
        </p>
      </div>
    </div>
  );
};

export default Hire;

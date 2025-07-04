import Image from "next/image";
import React from "react";

// Using 'Inter' (supports weight 100)
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "200" });

const Models = () => {
  return (
    <div className="flex flex-col mt-10 justfy-center items-center">
      <h1 className="w-full flex justify-center items-center text-[35px]">
        Find your BMW.
      </h1>
      <div className="flex flex-row gap-55 mt-10 ml-25 w-[80%]">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image
              className="rounded-r"
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
            />
          </div>

          <h1 className="text-[23px] mt-5">Find a New Car.</h1>

          <button className="w-[175px] h-[7vh] border mt-7 rounded font-semibold ">
            Search now
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image
              className="rounded-r"
              src="/logo1.png"
              alt="logo"
              width={90}
              height={90}
            />
          </div>

          <h1 className="text-[23px] mt-5">Book a test drive.</h1>

          <button className="w-[175px]  h-[8vh] border mt-7 rounded font-semibold ">
            <h1 className="m-2 ">Request a test drive</h1>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image
              className="rounded-r"
              src="/logo2.png"
              alt="logo"
              width={90}
              height={90}
            />
          </div>

          <h1 className="text-[23px] mt-5">Build your own.</h1>

          <button className="w-[175px] h-[7vh] border mt-7 rounded font-semibold ">
            Configure & Price
          </button>
        </div>
      </div>
      <div
        className="mt-10 bg-cover bg-center w-full h-[55vh]"
        style={{
          backgroundImage:
            "url(https://bmw.scene7.com/is/image/BMW/X5-7:3to1?fmt=webp&wid=1504&hei=501)",
        }}
      >
        <div className="m-10 ml-20">
          <p className="text-white">T H E </p>
          <h1
            className={`text-[240px] -mt-20 text-white ${inter.className} tracking-tight`}
          >
            X5
          </h1>
          <p className="text-white text-[25px] -mt-20">CRAFTED SUPREMACY.</p>
          <button className="border border-white px-22 py-3  text-white rounded mt-7">
            Discover Now
          </button>
        </div>
      </div>
      <div
        className="mt-10 bg-cover bg-center w-full h-[55vh]"
        style={{
          backgroundImage:
            "url(https://bmw.scene7.com/is/image/BMW/x3-mobile-banner-image-1:3to1?fmt=webp&wid=1504&hei=501)",
        }}
      >
        <div className="m-10 ml-20">
          <pre className="text-white">T H E  A L L - N E W </pre>
          <h1
            className={`text-[240px] -mt-20 text-white ${inter.className} tracking-tight`}
          >
            X3
          </h1>
          <p className="text-white text-[20px] -mt-20">MASTER EVERY MOMENT.</p>
          <button className="border border-white px-22 py-3  text-white rounded mt-7">
            Discover Now
          </button>
        </div>
      </div>

      <div
        className="mt-10 bg-cover bg-center relative w-full h-[55vh]"
        style={{
          backgroundImage:
            "url(https://bmw.scene7.com/is/image/BMW/DI21_000048047_3000_3000:3to1?fmt=webp&wid=1504&hei=501)",
        }}
      >
        <div className="m-10 ml-20 absolute bottom-1">

          <p className="text-white text-[30px] -mt-20">THIS IS FORWARDISM: THE 7.</p>
          <button className="border border-white px-22 py-3  text-white rounded mt-7">
            Know More
          </button>
        </div>
      </div>
      <div
        className="mt-10 bg-cover bg-center relative w-full h-[55vh]"
        style={{
          backgroundImage:
            "url(https://bmw.scene7.com/is/image/BMW/iX_Banner1:3to1?fmt=webp&wid=1504&hei=501)",
        }}
      >
        <div className="m-10 ml-25 absolute bottom-1">

          <p className="text-white text-[25px] -mt-20">THE iX: THE JOY OF ELECTRIC DRIVING.</p>
          <p className="text-white text-[20px] mt-5">100% electric. 100% driving pleasure. 100% BMW.</p>
          <p className="text-white text-[20px]">Experience an entirely new sensation of sheer driving pleasure.</p>

          <button className="border border-white px-22 py-3  text-white rounded mt-7">
            Know More
          </button>  
        </div>
      </div>
    </div>
  );
};

export default Models;

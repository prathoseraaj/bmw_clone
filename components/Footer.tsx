import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mb-30  flex flex-col">
      <div className="m-10 ml-20 flex flex-row gap-10">
        <p className="text-[13px]">FIND YOUR BMW</p>
        <p className="text-[13px] font-semibold">All Models</p>
      </div>
      <div className="bg-gray-100  pl-30 h-[50vh] w-full">
        <div className=" mt-17 flex flex-row gap-25 ">
          <div className="flex flex-col gap-3">
            <h1 className="text-[14px] text-gray-500">Contact</h1>
            <p className="font-semibold text-[15px]">Find a Dealer</p>
            <p className="font-semibold text-[15px]">Request a Test Drive </p>
            <p className="font-semibold text-[15px]">Careers</p>
            <p className="font-semibold text-[15px]">Contact Us</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[14px] text-gray-500">Quick Links</h1>
            <p className="font-semibold text-[15px]">Build your BMW</p>
            <p className="font-semibold text-[15px]">BMW Financial Services</p>
            <p className="font-semibold text-[15px]">BMW Safety</p>
            <p className="font-semibold text-[15px]">
              BMW Premium Selection (Used Cars)
            </p>
          </div>{" "}
          <div className="flex flex-col gap-3">
            <h1 className="text-[14px] text-gray-500">Experience BMW</h1>
            <p className="font-semibold text-[15px]">BMW Group</p>
            <p className="font-semibold text-[15px]">BMW Excellence Club</p>
            <p className="font-semibold text-[15px]">BMW Motorrad</p>
            <p className="font-semibold text-[15px]">Charging Network</p>
          </div>{" "}
          <div className="flex flex-col gap-3">
            <h1 className="text-[14px] text-gray-500">Legal</h1>
            <p className="font-semibold text-[15px]">
              Legal Disclaimer/Imprint
            </p>
            <p className="font-semibold text-[15px]">Privacy Policy</p>
          </div>
        </div>
        <div className="flex flex-row mt-20 gap-5">
          <Image
            src={
              "https://www.bmw.in/content/dam/bmw/common/footer/social/facebook-hover@2x.png.asset.1701168439683.png"
            }
            alt="icons"
            width={30}
            height={30}
          />
          <Image
            src={
              "https://www.bmw.in/content/dam/bmw/common/footer/social/instagram-hover@2x.png.asset.1701168393548.png"
            }
            alt="icons"
            width={30}
            height={30}
          />
          <Image
            src={
              "https://www.bmw.in/content/dam/bmw/common/footer/social/youtube-hover@2x.png.asset.1701168460827.png"
            }
            alt="icons"
            width={30}
            height={30}
          />
          <Image
            src={
              "https://www.bmw.in/content/dam/bmw/common/footer/social/linkedin-hover@2x.png.asset.1584959821340.png"
            }
            alt="icons"
            width={30}
            height={30}
          />
          <Image
            src={
              "https://www.bmw.in/content/dam/bmw/common/footer/social/X-Logo-90x90.png.asset.1700494811069.png"
            }
            alt="icons"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between mr-10 ">
        <h1 className="m-10 ml-25 text-[20px]">© BMW AG 2025</h1>
        <div className="flex flex-row gap-10 text-[13px] m-10 ml-25 font-semibold">
          <p>Legal Disclaimer/Imprint</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="flex flex-row m-20">
      <div>
        <Image
          src={
            "https://www.bmw.in/en/index/_jcr_content/root/maincontent/contentblueprint_1532906499/contentblueprint/contentblueprint/image.coreimg.jpeg/1740646378478/1502x846.jpeg"
          }
          alt="offer"
          width={675}
          height={675}
        />
      </div>
      <div className="flex flex-col justify-center  ml-20 -mr-10 m-10">
          <h1 className="text-[30px]">BMW Special Offers.</h1>
          <p className="text-[18px] mt-5">Monthly EMI starting from Rs.34999*/Month. Check</p>
          <p className="text-[18px]">Out similar BMW finance</p>
          <p className="text-[18px]">offers available across the BMW range.</p>
          <p className="font-semibold mt-5">Know More &gt; </p>
      </div>
    </div>
  );
};

export default Offer;

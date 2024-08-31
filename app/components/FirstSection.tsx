import React from "react";
import Btn from "./Btn";
import { BarcodeIcon } from "@/public/svg";
import Housing from "@/public/svg/housing";

type Props = {};

const FirstSection = (props: Props) => {
  return (
    <div className="px-20  py-16 w-full grid lg:grid-cols-2 gap-12 sm:justify-center items-center">
      <div className="flex flex-col md:items-start md:text-start  sm:items-center sm:text-center">
        <h1 className="text-[25px] font-bold w-fit  mb-4">
          <span>Your Gateway to Authentic Products </span>
          <hr />
          <span> Scan, Verify, and Buy with Confidence.</span>
        </h1>
        <p className="mb-4">
          This is a shared liquidity market smart contract which is used by
          multiple website to provide the users the best possible experience.
        </p>
        <div className=" mb-4">
          <Btn
            text="Scan Products"
            color="bg-[#3383e2]"
            icon={<BarcodeIcon />}
          />
        </div>
        <div className="flex flex-wrap gap-[20px] mb-4">
          <div className="flex flex-col items-center">
            <div className="text-[25px] font-bold">10+</div>
            <div className="text-[15px]">Products</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[25px] font-bold">20K+</div>
            <div className="text-[15px]">Producers</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[25px] font-bold">300K+</div>
            <div className="text-[15px]">Scans</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 block">
        <Housing />
      </div>
    </div>
  );
};

export default FirstSection;

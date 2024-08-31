import React from "react";
import Btn from "./Btn";
import { BarcodeIcon } from "@/public/svg";

type Props = {};

const FirstSection = (props: Props) => {
  return (
    <div className="px-4 py-8 w-full">
      <h1 className="text-[25px] font-bold grid border-separate w-fit borde-t mb-4">
        <span>Your Gateway to Authentic Products </span>
        <hr />
        <span> Scan, Verify, and Buy with Confidence.</span>
      </h1>
      <p className="mb-4">
        This is a shared liquidity market smart contract which is used by
        multiple website to provide the users the best possible experience.
      </p>
      <div className="flex justify-center mb-4">
        <Btn text="Scan Products" color="bg-[#3383e2]" icon={<BarcodeIcon />} />
      </div>
      <div className="flex flex-wrap justify-center gap-[20px] mb-4">
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
  );
};

export default FirstSection;

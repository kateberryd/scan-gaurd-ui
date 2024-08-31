import React from "react";
import { Btn } from ".";
import { ForwardIcon } from "@/public/svg";
import Housing from "@/public/svg/housing";

type Props = {};

const SecondSection = (props: Props) => {
  return (
    <div className="flex flex-col-reverse md:flex-row px-4 py-8 w-full">
      <div className="md:w-1/2 flex flex-col items-center justify-center">
        <Housing className="h-full w-full object-cover" />
      </div>
      <div className="md:w-1/2 gap-[15px] flex flex-col items-center justify-center">
        <h1 className="text-[25px] font-bold grid border-separate w-fit borde-t mb-4">
          <span>Trusted Authentication,</span>
          <span>Exclusively from ScanGuard</span>{" "}
        </h1>
        <p className="mb-4">
          Delivering simple, convenient, and trustworthy product verification to
          over 300,000 customers nationwide.
        </p>
        <div className="flex">
          <Btn
            text="Learn more "
            icon={<ForwardIcon />}
            border="border"
            borderColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
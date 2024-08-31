import { Logo, TwitterLogo, UknownOne, UnknownTwo } from "@/public/svg";
import Link from "next/link";
import React from "react";
import { Btn } from ".";

export default function Header() {
  return (
    <div className="flex justify-between items-center border-b  border-b-[#666] px-10 py-5">
      <div className="flex items-center gap-5">
        <Logo />
        <>|</>
        <div className="flex items-center gap-5">
          <Link href="/">
            <span className="font-medium text-[20px] font-poppins">Home</span>
          </Link>

          <Link href="/">
            <span className="font-medium text-[20px] font-poppins">
              Producers
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <TwitterLogo />
          <UknownOne />
          <UnknownTwo />
        </div>

        <div>
            <Btn text="Launch App" color="bg-[#3383E2]" />
         
        </div>
      </div>
    </div>
  );
}

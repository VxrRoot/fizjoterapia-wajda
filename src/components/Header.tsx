import Logo from "@/icons/Logo";
import ContainerLayout from "@/layouts/ContainerLayout";
import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import CTAButton from "./CTAButton";

const Header = () => {
  return (
    <header className=" fixed top-0 left-0 right-0  z-50 bg-[#073833]">
      <ContainerLayout>
        <div className="py-2 flex xl:justify-between">
          <Link href="/" className=" w-48" aria-label="Strona główna">
            <Logo />
          </Link>

          <div className=" items-center justify-end  xl:order-3 ml-auto mr-4 xl:m-0 relative hidden xl:flex">
            <div>
              <CTAButton text="Umów się na wizytę" />
            </div>
          </div>
          <div className="flex items-center xl:order-2 max-xl:ml-auto">
            <Nav />
          </div>
        </div>
      </ContainerLayout>
    </header>
  );
};

export default Header;

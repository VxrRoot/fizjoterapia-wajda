"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-[3px] rounded-full bg-white transition ease transform duration-300`;

  useEffect(() => {
    // Block scroll
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className={`flex  items-center  relative`}>
      {/* Mobile */}
      <div
        className={`flex top-[5.5rem] h-full z-50 justify-center left-0 w-full  fixed xl:hidden transition-all bg-[#073833] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-12 pt-20  w-full items-center">
          <div className="xl:px-6 xl:mx-2 xl:px-10 xl:mx-4">
            <Link
              className="  hover:-translate-y-1 transition-all block"
              href="#"
            >
              O mnie
            </Link>
          </div>
          <div className=" xl:px-10 xl:mx-4">
            <Link
              className="  hover:-translate-y-1 transition-all block"
              href="#"
            >
              Usługi
            </Link>
          </div>
        </div>
      </div>
      {/* End mobile */}
      <div className="hidden text-white text-xl font-semibold xl:flex items-center">
        <div className=" xl:px-10 xl:mx-4">
          <Link
            className=" whitespace-nowrap  hover:-translate-y-1 transition-all block"
            href="#"
          >
            O mnie
          </Link>
        </div>

        <div className=" xl:px-10 xl:mx-4">
          <Link
            className=" whitespace-nowrap hover:-translate-y-1 transition-all block"
            href="#"
          >
            Usługi
          </Link>
        </div>
        <div className="xl:pl-10">
          <Link className="btn-primary" href="#">
            Kontakt
          </Link>
        </div>
      </div>
      <div className="relative xl:hidden block">
        <button
          className="flex flex-col h-12 w-12 rounded justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "zamknij" : "otworz"}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-[10px] opacity-80 group-hover:opacity-100"
                : "opacity-80 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-80 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-[10px] opacity-80 group-hover:opacity-100"
                : "opacity-80 group-hover:opacity-100"
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Nav;

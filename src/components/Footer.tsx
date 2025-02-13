import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#073833]">
      <ContainerLayout>
        <div className="text-white py-10 flex flex-col md:flex-row justify-between">
          <div>COPYRIGHT &copy; fizjoterapiawajda 2025</div>
          <div>
            Realizacja{" "}
            <a className="underline" href="https://www.web-nova.pl/">
              Web Nova
            </a>
          </div>
        </div>
      </ContainerLayout>
    </footer>
  );
};

export default Footer;

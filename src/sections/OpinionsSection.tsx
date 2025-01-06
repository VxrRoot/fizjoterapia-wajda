import OpinionSlider from "@/components/OpinionSlider";
import GoogleIcon from "@/icons/google-icon";
import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";

const OpinionsSection = () => {
  return (
    <section className="bg-hero-gradient text-white py-20">
      <ContainerLayout>
        <div>
          <OpinionSlider />
          <div className="flex items-center pl-5">
            <GoogleIcon />
            <div className="leading-tight poppins ml-4">
              Ocena 5/5 <br /> z ponad 25 opinii
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OpinionsSection;

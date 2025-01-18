import ContainerLayout from "@/layouts/ContainerLayout";
import { Check } from "lucide-react";
import React from "react";

const WhyWorkWithMe = () => {
  return (
    <section className="py-20">
      <ContainerLayout>
        <div>
          <span className="poppins mb-2 text-[#04534B] font-semibold">
            Dlaczego warto?
          </span>
          <h2 className="mb-4">Twoje zdrowie w najlepszych rękach</h2>
          <ul className="flex flex-col space-y-4 mt-10">
            <li className="flex space-x-4">
              <Check className="bg-[#c4f692] text-[#073833] rounded-full w-8 h-8 p-2" />{" "}
              <p>Indywidualne podejście do każdego pacjenta</p>
            </li>
            <li className="flex space-x-4">
              <Check className="bg-[#c4f692] text-[#073833] rounded-full w-8 h-8 p-2" />{" "}
              <p>Wieloletnie doświadczenie i zaawansowane szkolenia</p>
            </li>
            <li className="flex space-x-4">
              <Check className="bg-[#c4f692] text-[#073833] rounded-full w-8 h-8 p-2" />{" "}
              <p>Holistyczne podejście do zdrowia</p>
            </li>
            <li className="flex space-x-4">
              <Check className="bg-[#c4f692] text-[#073833] rounded-full w-8 h-8 p-2" />{" "}
              <p>Kompleksowa oferta terapeutyczna</p>
            </li>
            <li className="flex space-x-4">
              <Check className="bg-[#c4f692] text-[#073833] rounded-full w-8 h-8 p-2" />{" "}
              <p> Nowoczesny sprzęt i techniki pracy</p>
            </li>
            <li className="flex space-x-4">
              <Check className="bg-[#c4f692] text-[#073833] rounded-full w-8 h-8 p-2" />{" "}
              <p> Zaufanie i rekomendacje pacjentów</p>
            </li>
            <li className="flex space-x-4">
              <Check className="bg-[#c4f692] text-[#073833] rounded-full w-8 h-8 p-2" />{" "}
              <p> Elastyczność i wygoda</p>
            </li>
            <li className="flex space-x-4">
              <Check className="bg-[#c4f692] text-[#073833] rounded-full w-8 h-8 p-2" />{" "}
              <p> Pasja do pomagania</p>
            </li>
          </ul>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default WhyWorkWithMe;

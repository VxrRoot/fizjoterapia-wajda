import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import ContactSection from "@/sections/ContactSection";
import { Phone } from "lucide-react";
import { Metadata } from "next";
import drenazImg from "../../../../public/drenaz.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Drenaż Pneumatyczny – skuteczna terapia limfatyczna | Korczyna, Krosno",
  description:
    "Profesjonalny drenaż pneumatyczny – redukcja obrzęków, poprawa krążenia i wspomaganie regeneracji organizmu. Umów wizytę w Korczynie lub Krośnie!",
  keywords:
    "drenaż pneumatyczny, masaż limfatyczny, redukcja obrzęków, poprawa krążenia, fizjoterapia Krosno, fizjoterapia Korczyna",
};

export default function Page() {
  return (
    <main className="pt-32">
      <ContainerLayout>
        <div className="max-w-4xl mx-auto my-20">
          <h1 className="max-lg:text-2xl">
            Drenaż Pneumatyczny – skuteczna metoda na poprawę krążenia i
            redukcję obrzęków
          </h1>
          <div className="mt-10">
            <div className="bg-[#c4f692] text-[#073833] w-max px-4 py-2 rounded-full">
              Czas trwania: 40 minut
            </div>
          </div>
          <Image
            alt="Drenaż Pneumatyczny - Fizjoterapia Patrycja Wajda"
            src={drenazImg}
            width={1000}
            height={1000}
            className="w-full h-auto rounded-2xl my-14"
          />
          <p className="my-10">
            Drenaż pneumatyczny to zaawansowana metoda terapii limfatycznej,
            która pomaga w redukcji obrzęków, poprawie krążenia krwi oraz
            wspomaganiu regeneracji organizmu. Jest to procedura wykorzystująca
            specjalne urządzenie generujące delikatne, pulsacyjne ciśnienie,
            które stymuluje układ limfatyczny i pomaga w usuwaniu nadmiaru
            płynów z organizmu.
          </p>
          <p className="my-10">
            Dzięki drenażowi pneumatycznemu można skutecznie wspomóc proces
            leczenia po operacjach, redukcję cellulitu oraz eliminację uczucia
            ciężkich nóg. Jest to terapia szczególnie polecana osobom, które
            mają skłonności do zatrzymywania wody w organizmie, sportowcom oraz
            pacjentom po urazach.
          </p>
          <h2 className="mb-4 text-xl">Korzyści z drenażu pneumatycznego:</h2>
          <ul className="poppins list-disc list-inside">
            <li>Zmniejszenie obrzęków i zastojów limfatycznych</li>
            <li>Poprawa krążenia krwi i limfy</li>
            <li>Przyspieszenie regeneracji po urazach i operacjach</li>
            <li>Zmniejszenie uczucia ciężkości nóg</li>
            <li>Wspomaganie detoksykacji organizmu</li>
            <li>Pomoc w redukcji cellulitu</li>
          </ul>
          <div className="border-t border-[#073833] mt-10 pt-10">
            <h3 className="text-center">
              Chcesz poprawić krążenie i pozbyć się obrzęków?
              <br /> Umów się na drenaż pneumatyczny już dziś!
            </h3>
            <div className="flex flex-col lg:flex-row max-lg:space-y-4 lg:space-x-8 items-center justify-center mt-10">
              <CTAButton
                className="!text-base !py-3"
                text="Zarezerwuj termin"
              />
              <span>lub</span>
              <a href="tel:+48785395887" className="flex gap-2 poppins ">
                <Phone className="text-[#04534B]" />
                <span>+48 785 395 887</span>
              </a>
            </div>
          </div>
        </div>
      </ContainerLayout>
      <ContactSection />
    </main>
  );
}

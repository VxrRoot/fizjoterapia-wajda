import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import ContactSection from "@/sections/ContactSection";
import { Phone } from "lucide-react";
import { Metadata } from "next";
import iastmImg from "../../../../public/iastm3.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title: "IASTM – mobilizacja tkanek miękkich narzędziami | Korczyna, Krosno",
  description:
    "IASTM (Instrument Assisted Soft Tissue Mobilization) to skuteczna terapia manualna, poprawiająca mobilność, redukująca ból i wspomagająca regenerację mięśni. Umów wizytę w Korczynie lub Krośnie!",
  keywords:
    "IASTM, mobilizacja tkanek miękkich, terapia manualna, poprawa mobilności, regeneracja mięśni, fizjoterapia Krosno, fizjoterapia Korczyna",
};

export default function Page() {
  return (
    <main className="pt-32">
      <ContainerLayout>
        <div className="max-w-4xl mx-auto my-20">
          <h1 className="max-lg:text-2xl">
            IASTM – skuteczna mobilizacja tkanek miękkich
          </h1>
          <div className="mt-10">
            {/* <div className="bg-[#c4f692] text-[#073833] w-max px-4 py-2 rounded-full">
              Czas trwania: 30 minut
            </div> */}
          </div>
          <Image
            alt="IASTM - Fizjoterapia Patrycja Wajda"
            src={iastmImg}
            width={1000}
            height={1000}
            className="w-full h-auto rounded-2xl my-14"
          />
          <p className="my-10">
            IASTM (Instrument Assisted Soft Tissue Mobilization) to nowoczesna
            metoda terapii manualnej, która wykorzystuje specjalne narzędzia do
            mobilizacji tkanek miękkich. Technika ta pozwala na precyzyjne
            oddziaływanie na obszary o ograniczonej ruchomości, redukcję napięć
            mięśniowych oraz poprawę przepływu krwi i limfy.
          </p>
          <p className="my-10">
            Terapia IASTM jest często stosowana u pacjentów po urazach,
            operacjach oraz u sportowców w celu poprawy regeneracji i
            elastyczności tkanek. Narzędzia używane w tej metodzie umożliwiają
            terapeucie precyzyjną ocenę i leczenie blizn, zrostów oraz innych
            dysfunkcji powięziowych.
          </p>
          <h2 className="mb-4 text-xl">Korzyści z terapii IASTM:</h2>
          <ul className="poppins list-disc list-inside">
            <li>Poprawa mobilności tkanek miękkich</li>
            <li>Zmniejszenie bólu i napięcia mięśniowego</li>
            <li>Przyspieszenie regeneracji po urazach</li>
            <li>Redukcja blizn i zrostów powięziowych</li>
            <li>Poprawa elastyczności mięśni i stawów</li>
            <li>Wsparcie w rehabilitacji pourazowej</li>
          </ul>
          <div className="border-t border-[#073833] mt-10 pt-10">
            <h3 className="text-center">
              Chcesz poprawić mobilność i zredukować ból?
              <br /> Umów się na terapię IASTM już dziś!
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

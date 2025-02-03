import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import ContactSection from "@/sections/ContactSection";
import { Phone } from "lucide-react";
import { Metadata } from "next";
import terapiaStomatologicznaImg from "../../../../public/stomatologiczna.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Terapia Stomatologiczna – fizjoterapia w leczeniu bólu szczęki | Korczyna, Krosno",
  description:
    "Terapia stomatologiczna pomaga w leczeniu bruksizmu, napięć mięśni żuchwy i bólu stawów skroniowo-żuchwowych. Umów wizytę w Korczynie lub Krośnie!",
  keywords:
    "terapia stomatologiczna, fizjoterapia stomatologiczna, ból szczęki, bruksizm, stawy skroniowo-żuchwowe, fizjoterapia Krosno, fizjoterapia Korczyna",
};

export default function Page() {
  return (
    <main className="pt-32">
      <ContainerLayout>
        <div className="max-w-4xl mx-auto my-20">
          <h1 className="max-lg:text-2xl">
            Terapia Stomatologiczna – skuteczna metoda leczenia bólu szczęki i
            napięcia mięśniowego
          </h1>
          <div className="mt-10">
            <div className="bg-[#c4f692] text-[#073833] w-max px-4 py-2 rounded-full">
              Czas trwania: 45 minut
            </div>
          </div>
          <Image
            alt="Terapia Stomatologiczna - Fizjoterapia Patrycja Wajda"
            src={terapiaStomatologicznaImg}
            width={1000}
            height={1000}
            className="w-full h-auto rounded-2xl my-14"
          />
          <p className="my-10">
            Terapia stomatologiczna to nowoczesna metoda fizjoterapii, której
            celem jest redukcja bólu w obrębie stawów skroniowo-żuchwowych,
            poprawa funkcji żuchwy oraz eliminacja napięć mięśniowych w
            okolicach twarzy i szyi. Jest to szczególnie skuteczna terapia dla
            osób cierpiących na bruksizm, bóle głowy pochodzenia mięśniowego
            oraz problemy z otwieraniem i zamykaniem ust.
          </p>
          <p className="my-10">
            Dzięki precyzyjnym technikom terapii manualnej oraz ćwiczeniom
            funkcjonalnym możliwe jest przywrócenie prawidłowego balansu
            mięśniowego oraz zmniejszenie dyskomfortu w okolicach szczęki.
            Terapia stomatologiczna skutecznie wspiera leczenie ortodontyczne,
            protetyczne oraz pomaga w rehabilitacji po zabiegach chirurgicznych
            w obrębie jamy ustnej.
          </p>
          <h2 className="mb-4 text-xl">Korzyści z terapii stomatologicznej:</h2>
          <ul className="poppins list-disc list-inside">
            <li>Zmniejszenie bólu stawów skroniowo-żuchwowych</li>
            <li>Redukcja napięcia mięśni żuchwy i szyi</li>
            <li>Poprawa zakresu ruchu żuchwy</li>
            <li>Leczenie bruksizmu i nadmiernego zaciskania zębów</li>
            <li>Wsparcie w terapii ortodontycznej i protetycznej</li>
            <li>Redukcja bólu głowy pochodzenia mięśniowego</li>
          </ul>
          <div className="border-t border-[#073833] mt-10 pt-10">
            <h3 className="text-center">
              Zmagasz się z bólem szczęki lub bruksizmem?
              <br /> Umów się na terapię stomatologiczną już dziś!
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

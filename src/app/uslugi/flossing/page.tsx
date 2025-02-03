import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import ContactSection from "@/sections/ContactSection";
import { Phone } from "lucide-react";
import { Metadata } from "next";
import flossingImg from "../../../../public/floss.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Flossing – skuteczna terapia kompresyjna | Korczyna, Krosno",
  description:
    "Profesjonalna terapia Flossing – poprawa mobilności, regeneracja mięśni, redukcja bólu. Sprawdź skuteczność flossingu w Korczynie i Krośnie!",
  keywords:
    "flossing, terapia kompresyjna, rehabilitacja, redukcja bólu, poprawa mobilności, fizjoterapia Krosno, fizjoterapia Korczyna",
};

export default function Page() {
  return (
    <main className="pt-32">
      <ContainerLayout>
        <div className="max-w-4xl mx-auto my-20">
          <h1 className="max-lg:text-2xl">
            Flossing – nowoczesna terapia poprawiająca mobilność i regenerację
          </h1>
          <div className="mt-10">
            <div className="bg-[#c4f692] text-[#073833] w-max px-4 py-2 rounded-full">
              Czas trwania: 30 minut
            </div>
          </div>
          <Image
            alt="Flossing - Fizjoterapia Patrycja Wajda"
            src={flossingImg}
            width={1000}
            height={1000}
            className="w-full h-auto rounded-2xl my-14"
          />
          <p className="my-10">
            Flossing to nowoczesna metoda terapii kompresyjnej, która pomaga w
            zwiększeniu mobilności, redukcji bólu oraz regeneracji mięśni i
            stawów. Technika ta polega na owinięciu określonych partii ciała
            specjalną gumową taśmą w celu wywołania kompresji, a następnie
            wykonywaniu kontrolowanych ruchów, co poprawia krążenie krwi i
            zwiększa zakres ruchu.
          </p>
          <p className="my-10">
            Flossing jest szczególnie skuteczny u sportowców, osób po urazach
            oraz tych, którzy odczuwają ograniczenia ruchowe. Poprzez chwilowe
            ograniczenie przepływu krwi i jego nagłe uwolnienie, dochodzi do
            lepszego dotlenienia tkanek i usuwania stanów zapalnych. To sprawia,
            że flossing jest świetnym narzędziem do wspomagania rehabilitacji
            oraz poprawy wydolności mięśniowej.
          </p>
          <h2 className="mb-4 text-xl">Korzyści z flossingu:</h2>
          <ul className="poppins list-disc list-inside">
            <li>Poprawa zakresu ruchu i elastyczności mięśni</li>
            <li>Zmniejszenie bólu i napięcia mięśniowego</li>
            <li>Przyspieszenie regeneracji po wysiłku</li>
            <li>Wspomaganie rehabilitacji pourazowej</li>
            <li>Polepszenie ukrwienia i usuwanie stanów zapalnych</li>
            <li>Zmniejszenie ryzyka kontuzji</li>
          </ul>
          <div className="border-t border-[#073833] mt-10 pt-10">
            <h3 className="text-center">
              Chcesz poprawić mobilność i pozbyć się bólu?
              <br /> Umów się na terapię flossing już dziś!
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

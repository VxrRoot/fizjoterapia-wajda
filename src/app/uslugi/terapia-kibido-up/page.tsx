import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import ContactSection from "@/sections/ContactSection";
import { Phone } from "lucide-react";
import { Metadata } from "next";
import kobidoImg from "../../../../public/kibido.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terapia Kobido Up – liftingujący masaż twarzy | Korczyna, Krosno",
  description:
    "Terapia Kobido Up to naturalny lifting twarzy, który poprawia jędrność skóry, redukuje zmarszczki i poprawia krążenie. Umów wizytę w Korczynie lub Krośnie!",
  keywords:
    "Terapia Kobido Up, masaż liftingujący, odmładzanie twarzy, naturalny lifting, poprawa jędrności skóry, masaż Kobido, fizjoterapia Krosno, fizjoterapia Korczyna",
};

export default function Page() {
  return (
    <main className="pt-32">
      <ContainerLayout>
        <div className="max-w-4xl mx-auto my-20">
          <h1 className="max-lg:text-2xl">
            Terapia Kobido Up – naturalny lifting twarzy i relaksacja
          </h1>
          <div className="mt-10">
            <div className="bg-[#c4f692] text-[#073833] w-max px-4 py-2 rounded-full">
              Czas trwania: 90 minut
            </div>
          </div>
          <Image
            alt="Terapia Kobido Up - Fizjoterapia Patrycja Wajda"
            src={kobidoImg}
            width={1000}
            height={1000}
            className="w-full h-auto rounded-2xl my-14"
          />
          <p className="my-10">
            Terapia Kobido Up to intensywny, japoński masaż liftingujący, który
            pobudza skórę twarzy do regeneracji, poprawia napięcie mięśniowe i
            modeluje owal twarzy. To doskonała alternatywa dla zabiegów medycyny
            estetycznej, ponieważ działa naturalnie i bezinwazyjnie. Kobido Up
            łączy techniki masażu głębokiego, drenażu limfatycznego oraz
            akupresury, zapewniając wyjątkowe efekty odmładzające i
            relaksacyjne.
          </p>
          <p className="my-10">
            Regularne sesje terapii Kobido Up pomagają redukować zmarszczki,
            poprawiać elastyczność skóry oraz zwiększać krążenie krwi, co
            skutkuje młodszym i zdrowszym wyglądem. Masaż działa również
            relaksująco, redukując stres i napięcie w obrębie twarzy, szyi oraz
            karku.
          </p>
          <h2 className="mb-4 text-xl">Korzyści z terapii Kobido Up:</h2>
          <ul className="poppins list-disc list-inside">
            <li>Naturalny lifting twarzy</li>
            <li>Redukcja zmarszczek i poprawa jędrności skóry</li>
            <li>Poprawa owalu twarzy i napięcia mięśniowego</li>
            <li>Wspomaganie produkcji kolagenu i elastyny</li>
            <li>Redukcja stresu i napięcia mięśniowego</li>
            <li>Lepsze krążenie krwi i dotlenienie skóry</li>
          </ul>
          <div className="border-t border-[#073833] mt-10 pt-10">
            <h3 className="text-center">
              Chcesz odmłodzić swoją twarz i poprawić jej jędrność?
              <br /> Umów się na terapię Kobido Up już dziś!
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

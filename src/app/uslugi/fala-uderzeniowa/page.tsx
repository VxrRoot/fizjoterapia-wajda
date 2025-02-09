import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import ContactSection from "@/sections/ContactSection";
import { Phone } from "lucide-react";
import falaImg from "../../../../public/fala.webp";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Fala uderzeniowa – leczenie bólu i regeneracja tkanek | Korczyna, Krosno",
  description:
    "Skuteczna terapia falą uderzeniową w Korczynie. Leczenie ostrogi piętowej, łokcia tenisisty i bólu mięśni. Umów wizytę już dziś!",
  keywords:
    "fala uderzeniowa, leczenie ostrogi piętowej, terapia tendinopatii, regeneracja tkanek, fizjoterapia falą uderzeniową, fizjoterapia Krosno, fizjoterapia Korczyna",
};

export default function Page() {
  return (
    <main className="pt-32">
      <ContainerLayout>
        <div className="max-w-4xl mx-auto my-20">
          <h1 className="max-lg:text-2xl">
            Fala uderzeniowa – skuteczna regeneracja i redukcja bólu
          </h1>
          <div className="mt-10">
            <div className="bg-[#c4f692] text-[#073833] w-max px-4 py-2 rounded-full">
              Czas trwania: 30 minut
            </div>
          </div>
          <Image
            alt="Wizyta fizjoterapeutyczna - Fizjoterapia Patrycja Wajda"
            src={falaImg}
            width={1000}
            height={1000}
            className="w-full h-auto rounded-2xl my-14"
          />
          <p className="my-10">
            Fala uderzeniowa to nowoczesna i skuteczna metoda
            fizjoterapeutyczna, która stymuluje naturalne procesy regeneracyjne
            organizmu. Terapia polega na precyzyjnym kierowaniu fal akustycznych
            na bolesne miejsca, co poprawia krążenie, przyspiesza gojenie tkanek
            i redukuje stany zapalne. Jest to nieinwazyjna, bezpieczna i szybka
            forma leczenia, która przynosi ulgę w przewlekłych dolegliwościach
            bólowych.
          </p>
          <p className="my-10">
            Terapia falą uderzeniową jest szczególnie skuteczna w leczeniu
            schorzeń ortopedycznych, takich jak ostroga piętowa, łokieć
            tenisisty czy tendinopatie. Dzięki tej metodzie można również
            redukować bóle barku, punkty spustowe i przeciążenia mięśniowe. To
            idealne rozwiązanie dla osób aktywnych fizycznie oraz pacjentów
            zmagających się z przewlekłymi dolegliwościami.
          </p>
          <h2 className="mb-4 text-xl">
            Dolegliwości, w których pomaga fala uderzeniowa:
          </h2>
          <ul className="poppins list-disc list-inside">
            <li>Ostroga piętowa</li>
            <li>Łokieć tenisisty i golfisty</li>
            <li>Tendinopatie (zapalenie ścięgien)</li>
            <li>Zespół ciasnoty podbarkowej</li>
            <li>Przeciążenia mięśniowe</li>
            <li>Punkty spustowe i bóle mięśni</li>
          </ul>
          <div className="border-t border-[#073833] mt-10 pt-10">
            <h3 className="text-center">
              Zmagasz się z bólem? <br /> Umów się na terapię i poczuj ulgę!
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

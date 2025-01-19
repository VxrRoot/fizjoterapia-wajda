import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import ContactSection from "@/sections/ContactSection";
import { Phone } from "lucide-react";
import { Metadata } from "next";
import masazImg from "../../../../public/masaz.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Masaż leczniczy – ulga w bólu i regeneracja mięśni | Korczyna, Krosno",
  description:
    "Profesjonalny masaż leczniczy. Skuteczna redukcja bólu, napięcia mięśniowego i regeneracja ciała. Umów wizytę już dziś!",
  keywords:
    "masaż leczniczy, terapia kręgosłupa, redukcja napięcia mięśni, regeneracja mięśni, fizjoterapia Krosno, fizjoterapia Korczyna",
};

export default function Page() {
  return (
    <main className="pt-32">
      <ContainerLayout>
        <div className="max-w-4xl mx-auto my-20">
          <h1 className="max-lg:text-2xl">
            Masaż leczniczy – Twoja droga do ulgi w bólu i regeneracji mięśni
          </h1>
          <div className="mt-10">
            <div className="bg-[#c4f692] text-[#073833] w-max px-4 py-2 rounded-full">
              Czas trwania: 60minut
            </div>
          </div>
          <Image
            alt="Wizyta fizjoterapeutyczna - Fizjoterapia Patrycja Wajda"
            src={masazImg}
            width={1000}
            height={1000}
            className="w-full h-auto rounded-2xl my-14"
          />
          <p className="my-10">
            Masaż leczniczy to jedna z najskuteczniejszych metod wspierających
            regenerację mięśni, redukcję bólu i poprawę krążenia. Jest to zabieg
            terapeutyczny, który skupia się na najbardziej obciążonych partiach
            ciała, takich jak kręgosłup, kark czy kończyny. Masaż wykonuję
            indywidualnie, dostosowując techniki do potrzeb każdego pacjenta, co
            czyni go idealnym rozwiązaniem zarówno dla osób zmagających się z
            przewlekłymi bólami, jak i tych, którzy chcą zadbać o swoje ciało w
            sposób profilaktyczny.
          </p>
          <p className="my-10">
            Masaż leczniczy przynosi ulgę w wielu dolegliwościach, takich jak
            napięcia mięśniowe, sztywność stawów czy bóle kręgosłupa. Dzięki
            regularnym zabiegom możesz poprawić swoją mobilność, zwiększyć
            zakres ruchów oraz zredukować stres i zmęczenie. Masaż pomaga
            również osobom po urazach lub intensywnym wysiłku fizycznym,
            wspierając proces regeneracji tkanek. Nie zwlekaj – zdecyduj się na
            masaż leczniczy i poczuj różnicę w swoim samopoczuciu już po
            pierwszej sesji!
          </p>
          <h2 className="mb-4 text-xl">
            Dolegliwości, w których pomaga masaż leczniczy:
          </h2>
          <ul className="poppins list-disc list-inside">
            <li>Przewlekłe bóle pleców i karku</li>
            <li>Napięcia mięśniowe wynikające ze stresu</li>
            <li>Ograniczona ruchomość stawów</li>
            <li>Stany pourazowe (np. skręcenia, przeciążenia mięśniowe)</li>
            <li>Regeneracja po intensywnym wysiłku fizycznym</li>
            <li>Sztywność i zmęczenie mięśni</li>
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

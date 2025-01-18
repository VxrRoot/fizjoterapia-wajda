import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="py-20">
      <ContainerLayout>
        <div>
          <span
            className="poppins mb-2 text-[#04534B] font-semibold block"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            Fizjoterapia
          </span>
          <h2 className="mb-4" data-aos="fade-up" data-aos-offset="200">
            Zobacz jak mogę Ci pomóc
          </h2>
          <p className="max-w-[50rem]" data-aos="fade-up" data-aos-offset="200">
            Wizyta obejmuje szczegółowe badanie oraz indywidualnie dostosowaną
            terapię. W zależności od potrzeb pacjenta stosowane są techniki
            manualne, ćwiczenia, terapia bańkowa, flossing, drenaż pneumatyczny,
            fala uderzeniowa lub terapia wisceralna. Każda kolejna wizyta
            zawiera kontrolę postępów w leczeniu, aby zapewnić jak najlepsze
            efekty.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10">
            <article className=" flex flex-col">
              <Image
                alt=""
                className="rounded-xl"
                src="/terapia.avif"
                layout="responsive"
                width={100}
                height={100}
              />
              <h3 className="mt-6">Wizyta fizjoterapeutyczna</h3>
              <p className="poppins text-base mt-2">
                Terapia przy użyciu specjalnych narzędzi, które stymulują układ
                nerwowy i mięśniowo-powięziowy. IASTM pomaga w redukcji bólu,
                poprawie zakresu ruchu oraz regeneracji tkanek, w tym blizn i
                uszkodzonych powięzi.
              </p>
              <div className="mt-auto">
                <Link
                  href="/uslugi/fizjoterapia"
                  className="text-[#04534B] w-max font-bold mt-4 flex group"
                >
                  Czytaj więcej{" "}
                  <ArrowRight className="w-5 ml-2 group-hover:ml-4 transition-all" />
                </Link>
              </div>
            </article>
            <article className="">
              <Image
                alt=""
                className="rounded-xl"
                src="/masaz.avif"
                layout="responsive"
                width={100}
                height={100}
              />
              <h3 className="mt-6">Masaż leczniczy</h3>
              <p className="poppins text-base mt-2">
                Idealny dla osób zmagających się z napięciem mięśniowym, bólami
                kręgosłupa oraz stresem. Masaż rozluźnia punkty spustowe,
                przynosi ulgę w bólu, zmniejsza napięcie i poprawia
                samopoczucie. Dla chętnych dostępny także masaż relaksacyjny
                gorącą świecą.
              </p>
              <div className="mt-auto">
                <Link
                  href="/uslugi/masaz-leczniczy"
                  className="text-[#04534B] font-bold mt-4 flex group w-max"
                >
                  Czytaj więcej{" "}
                  <ArrowRight className="w-5 ml-2 group-hover:ml-4 transition-all" />
                </Link>
              </div>
            </article>
            <article className="">
              <Image
                alt=""
                className="rounded-xl"
                src="/wisceralka.avif"
                layout="responsive"
                width={100}
                height={100}
              />
              <h3 className="mt-6">Terapia wisceralna</h3>
              <p className="poppins text-base mt-2">
                Terapia ta polega na delikatnych uciskach i manipulacjach w
                obrębie jamy brzusznej. Dzięki temu poprawia funkcjonowanie
                narządów wewnętrznych, układu krwionośnego, limfatycznego i
                nerwowego. Polecana przy refluksie, zaparciach, bólu kręgosłupa
                czy napięciach w obrębie brzucha.
              </p>
              <div className="mt-auto">
                <Link
                  href="/uslugi/terapia-wisceralna"
                  className="text-[#04534B] w-max font-bold mt-4 flex group"
                >
                  Czytaj więcej{" "}
                  <ArrowRight className="w-5 ml-2 group-hover:ml-4 transition-all" />
                </Link>
              </div>
            </article>
          </div>
          <div className="mt-24 flex flex-col items-center">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-6 max-lg:space-y-4">
              <CTAButton text="Umów się na wizytę już teraz" />
              <span>lub</span>
              <Link href="/uslugi" className="underline">
                Sprawdź wszystkie usługi
              </Link>
            </div>
            <p className="max-w-[60rem] text-center mt-20">
              Jeśli nie znalazłeś/-aś usługi, której potrzebujesz, zapraszam do
              kontaktu telefonicznego. Chętnie udzielę dodatkowych informacji i
              pomogę znaleźć najlepsze rozwiązanie dopasowane do Twoich potrzeb.
            </p>
            <div className="mt-10">
              <a href="tel:+48785395887" className="flex gap-2 poppins">
                <Phone className="text-[#04534B]" />
                <span>+48 785 395 887</span>
              </a>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ServicesSection;

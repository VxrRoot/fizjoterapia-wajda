import ContainerLayout from "@/layouts/ContainerLayout";
import ContactSection from "@/sections/ContactSection";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services: {
  id: number;
  name: string;
  desc: string;
  url: string;
  imgUrl: string;
}[] = [
  {
    id: 1,
    name: "Wizyta fizjoterapeutyczna",
    desc: "Terapia przy użyciu specjalnych narzędzi, które stymulują układ nerwowy i mięśniowo-powięziowy. IASTM pomaga w redukcji bólu, poprawie zakresu ruchu oraz regeneracji tkanek, w tym blizn i uszkodzonych powięzi.",
    url: "/fizjoterapia",
    imgUrl: "/terapia.avif",
  },
  {
    id: 2,
    name: "Masaż leczniczy",
    desc: "Idealny dla osób zmagających się z napięciem mięśniowym, bólami kręgosłupa oraz stresem. Masaż rozluźnia punkty spustowe, przynosi ulgę w bólu, zmniejsza napięcie i poprawia samopoczucie. Dla chętnych dostępny także masaż relaksacyjny gorącą świecą.",
    imgUrl: "/masaz.avif",
    url: "/masaz-leczniczy",
  },
  {
    id: 3,
    name: "Terapia wisceralna",
    desc: "Terapia ta polega na delikatnych uciskach i manipulacjach w obrębie jamy brzusznej. Dzięki temu poprawia funkcjonowanie narządów wewnętrznych, układu krwionośnego, limfatycznego i nerwowego. Polecana przy refluksie, zaparciach, bólu kręgosłupa czy napięciach w obrębie brzucha.",
    imgUrl: "/wisceralka.avif",
    url: "/terapia-wisceralna",
  },
  {
    id: 4,
    name: "Fala uderzeniowa",
    desc: "Terapia falą uderzeniową stymuluje organizm do regeneracji poprzez poprawę krążenia krwi i metabolizmu w uszkodzonych tkankach. Jest skuteczna w leczeniu schorzeń ortopedycznych, takich jak łokieć tenisisty, ostroga piętowa, tendinopatie czy punkty spustowe.",
    imgUrl: "/fala.avif",
    url: "/fala-uderzeniowa",
  },
  {
    id: 5,
    name: "Kinesiotaping",
    desc: "Metoda polega na aplikacji elastycznych taśm na skórę, które działają przeciwbólowo, rozluźniająco i wspomagają przepływ limfy. Tejpy stosowane są przy bólu kręgosłupa, obrzękach, sztywności stawów oraz w celach estetycznych po terapii Kobido.",
    imgUrl: "/taping.avif",
    url: "/kinesiotaping",
  },
  {
    id: 6,
    name: "Terapia próżniowa (bańki chińskie)",
    desc: "Stosowanie bańki chińskiej (bezogniowej, gumowej lub szklanej) w celach rozluźniających, przeciwbólowych oraz wspierających drenaż limfatyczny. Doskonale sprawdza się w redukcji cellulitu, poprawie krążenia i rozluźnianiu napiętych mięśni.",
    imgUrl: "/banki.avif",
    url: "/terapia-prozniowa",
  },
  {
    id: 7,
    name: "Drenaż pneumatyczny",
    desc: "Zabieg wykonywany przy pomocy specjalnego urządzenia, które wykorzystuje sekwencyjne uciski powietrzne. Drenaż limfatyczny wspomaga redukcję cellulitu, przynosi ulgę w „ciężkich nogach” oraz pomaga osobom z obrzękami i zwyrodnieniami stawów.",
    imgUrl: "/drenaz.avif",
    url: "/drenaz-pneumatyczny",
  },
  {
    id: 8,
    name: "Flossing",
    desc: "Elastyczna taśma owinięta wokół stawów lub mięśni wywołuje krótkotrwałą kompresję, która po zdjęciu powoduje intensywne przekrwienie i regenerację. Metoda ta poprawia mobilność, zmniejsza obrzęki i wspiera leczenie przeciążeń oraz urazów.",
    imgUrl: "/floss.avif",
    url: "/flossing",
  },
  {
    id: 9,
    name: "IASTM (Instrument Assisted Soft Tissue Mobilization)",
    desc: "Terapia przy użyciu specjalnych narzędzi, które stymulują układ nerwowy i mięśniowo-powięziowy. IASTM pomaga w redukcji bólu, poprawie zakresu ruchu oraz regeneracji tkanek, w tym blizn i uszkodzonych powięzi.",
    imgUrl: "/iastm3.avif",
    url: "/iastm",
  },
  {
    id: 10,
    name: "Terapia stomatologiczna",
    desc: "Specjalistyczna terapia obejmująca mięśnie twarzy, żuchwę oraz stawy skroniowo-żuchwowe. Pomaga w leczeniu bólów głowy, migren, szumów usznych, kliknięć w stawach oraz w przygotowaniu do leczenia ortodontycznego.",
    imgUrl: "/stomatologiczna.avif",
    url: "/terapia-stomatologiczna",
  },
  {
    id: 11,
    name: "Terapia Kobido Up",
    desc: "Głęboka terapia tkanek twarzy obejmująca masaż, lifting i stymulację mięśni. Poprawia owal twarzy, redukuje zmarszczki i napięcia, a także przynosi głęboki relaks. Może być wspierana kinesiotapingiem dla przedłużenia efektów.",
    imgUrl: "/kibido.avif",
    url: "/terapia-kibido-up",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32">
      <ContainerLayout>
        <div className="max-w-3xl my-20">
          <h1>
            Usługi fizjoterapeutyczne – Profesjonalna opieka dla Twojego zdrowia
          </h1>
          <h2 className="poppins font-normal text-xl mt-10">
            Poznaj szeroką gamę zabiegów, które pomogą Ci odzyskać zdrowie,
            zmniejszyć ból i&nbsp;poprawić jakość życia
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 mb-20">
          {services.map((item) => (
            <article key={item.id}>
              <Image
                alt=""
                className="rounded-xl w-full aspect-auto"
                src={item.imgUrl}
                layout="responsive"
                width={100}
                height={100}
              />
              <h3 className="mt-6">{item.name}</h3>
              <p className="poppins text-base mt-2">{item.desc}</p>
              <div className="mt-auto">
                <Link
                  href={`/uslugi/${item.url}`}
                  className="text-[#04534B] w-max font-bold mt-4 flex group"
                >
                  Czytaj więcej{" "}
                  <ArrowRight className="w-5 ml-2 group-hover:ml-4 transition-all" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </ContainerLayout>
      <ContactSection />
    </main>
  );
}

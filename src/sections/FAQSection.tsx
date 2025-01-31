import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContainerLayout from "@/layouts/ContainerLayout";
import { Instagram, Mail, Phone } from "lucide-react";

const FAQItems = [
  {
    id: 1,
    question: "Jak przygotować się do pierwszej wizyty?",
    answear:
      "Na pierwszą wizytę prosimy zabrać wygodne ubranie, wyniki badań (jeśli są dostępne) oraz dokumentację medyczną. Warto przyjść punktualnie, aby wypełnić kwestionariusz dotyczący zdrowia",
  },
  {
    id: 2,
    question: "Jak długo trwa wizyta?",
    answear:
      "Standardowa wizyta trwa około 50-60 minut. W przypadku bardziej złożonych problemów czas trwania może zostać dostosowany do potrzeb pacjenta.",
  },
  {
    id: 3,
    question: "Czy zabiegi są bolesne?",
    answear:
      "Większość zabiegów jest bezbolesna, choć niektóre techniki, takie jak terapia punktów spustowych czy pinoterapia, mogą wiązać się z chwilowym dyskomfortem. Wszelkie działania są dostosowywane do poziomu komfortu pacjenta.",
  },
  {
    id: 4,
    question: "Czy mogę przyjść na wizytę bez skierowania od lekarza?",
    answear:
      "Tak, fizjoterapia nie wymaga skierowania. Jeśli jednak posiadasz diagnozę lekarską, wyniki badań lub inne dokumenty medyczne, warto je przynieść na wizytę.",
  },
  {
    id: 5,
    question: "Jak często powinienem uczęszczać na zabiegi?",
    answear:
      "Częstotliwość wizyt jest ustalana indywidualnie po ocenie stanu zdrowia. W niektórych przypadkach wystarczy kilka wizyt, w innych zaleca się regularną terapię przez dłuższy czas.",
  },
  {
    id: 6,
    question: "Czy możliwy jest dojazd do pacjenta?",
    answear:
      "Tak, oferujemy możliwość terapii w domu pacjenta. Prosimy o wcześniejszy kontakt w celu ustalenia szczegółów i dostępności.",
  },
  {
    id: 7,
    question: "Czy oferowane są zabiegi relaksacyjne?",
    answear:
      "Tak, oprócz terapii leczniczej oferujemy masaże relaksacyjne, takie jak masaż świecą, które pomagają odprężyć ciało i umysł.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20">
      <ContainerLayout>
        <div className="flex flex-col lg:flex-row lg:space-x-10 max-lg:space-y-10">
          <div className="flex-1 lg:mt-6">
            <h2 data-aos="fade-up" data-aos-offset="200">
              Często zadawane pytania przez moich pacjentów
            </h2>
            <p className="mt-10" data-aos="fade-up" data-aos-offset="200">
              Znajdziesz tutaj informacje najważniejsze aspekty terapii,
              rezerwacji wizyt i przygotowania do pierwszego spotkania, abyś
              czuł się pewnie i komfortowo.
            </p>
            <p className="mt-10" data-aos="fade-up" data-aos-offset="200">
              Nie ma odpowiedzi na Twoje pytanie? Skontaktuj się ze mną.
            </p>
            <div
              className="mt-4 flex flex-col max-sm:flex-col sm:space-y-4"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              <a href="tel:+48785395887" className="flex gap-2 poppins">
                <Phone className="text-[#04534B]" />
                <span>+48 785 395 887</span>
              </a>

              <a
                href="mailto:fizjoterapia.wajda@gmail.com"
                className="flex gap-2 poppins max-sm:mt-4"
              >
                <Mail className="text-[#04534B]" />
                fizjoterapia.wajda@gmail.com
              </a>
              <a
                href="https://www.instagram.com/fizjoterapia.wajda/"
                target="_blank"
                className="flex gap-2 poppins max-sm:mt-4"
              >
                <Instagram className="text-[#04534B]" />
                Zajrzyj na mój profil
              </a>
            </div>
            <div className="mt-4 flex gap-4"></div>
          </div>
          <div className="flex-1">
            <Accordion
              type="single"
              collapsible
              data-aos="fade-left"
              data-aos-offset="200"
            >
              {FAQItems.map((item) => (
                <AccordionItem value={`item-${item.id}`} key={item.id}>
                  <AccordionTrigger className="text-2xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    {item.answear}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default FAQSection;

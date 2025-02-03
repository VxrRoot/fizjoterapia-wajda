"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const opinions = [
  {
    id: 1,
    author: "Paulina",
    title: "Podopieczna",
    text: ',,Z masażu Pani Patrycji skorzystałam z powodu bólu karku i pleców. Po 1 masażu ból prawie zniknął. Po 2 wizytach całkowicie. Bardzo komfortowo czuję się w gabinecie Pani Patrycji. Pani Patrycja jest miła i rozmowna, dla mnie bardzo ważny jest dobry kontakt z fizjoterapeutą. Z masażu w przyszłości napewno skorzystam. Polecam."',
  },
  {
    id: 2,
    author: "Małgorzata",
    title: "Podopieczna",
    text: ',,Bardzo profesjonalne i indywidualne podejście, po jednej wizycie ból szyi i głowy ustąpił, masaż twarzy kobido - super relaks i efekt widoczny od razu. Bardzo dziękuję za cenne rady"',
  },
  {
    id: 3,
    author: "Małgorzata",
    title: "Podopieczna",
    text: "Polecam Panią Patrycję z całego serca. Jest świetna, co potwierdzają również rehabilitanci z jednej z najlepszych klinik w Polsce. Jestem po endoprotezie kolana i po miesiącu rehabilitacji u Pani Patrycji efekty są znakomite. Zdecydowanie polecam i dziękuję.",
  },
  {
    id: 4,
    author: "Klaudia",
    title: "Podopieczna",
    text: "Fizjoterapeutka, która pomogła mi w walce z uporczywym bólem ramion i szyi. Już po pierwszej wizycie zauważyłam znaczną poprawę. Pełen profesjonalizm i empatia sprawiły, że czułem się zrozumiana i zaopiekowana. Dzięki spersonalizowanemu podejściu oraz skutecznej terapii ból znacznie się zmniejszył, a ja odzyskałam pełną sprawność. Zdecydowanie polecam tę fizjoterapeutkę każdemu, kto zmaga się z podobnymi dolegliwościami. To osoba, która naprawdę dba o swoich pacjentów i potrafi zdziałać cuda!",
  },
];

const OpinionSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`max-w-[1920px] mx-auto relative`}>
      <div className="slider-container">
        <div style={{}}>
          <Slider
            {...settings}
            className="[&_.slick-track]:flex [&_.slick-track]:gap-10 cursor-pointer"
          >
            {opinions.map(({ text, id, author }, idx) => {
              return (
                <div key={`${idx}-${id}`} className="">
                  <p className="lg:text-5xl text-2xl syne leading-normal mb-8 font-light text-white">
                    {text}
                    <span className="lg:text-5xl text-3xl italic ">
                      - {author}
                    </span>
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OpinionSlider;

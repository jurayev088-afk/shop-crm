import SliderModule from "react-slick";
import type { Settings } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import categoryImage from "../../../../assets/img/photo.jpg";
import iconcha from "../../../../assets/svg/q1.svg";
import { useDarkMode } from "../../../../context/DarkMode";

const Slider =
  (SliderModule as unknown as { default?: typeof SliderModule }).default ??
  SliderModule;

export default function CategoryList() {
  const sliderRef = useRef<SliderModule | null>(null);
  const {isSun, setIsSun} = useDarkMode()
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesPerRow: 3,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          rows: 2,
          slidesPerRow: 2,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows: 2,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const categoriesData = [
    { label: "Elektronika", id: 1, image: iconcha },
    { label: "Kiyimlar", id: 2, image: iconcha },
    { label: "Oziq-ovqat", id: 3, image: iconcha },
    { label: "Mebel", id: 4, image: iconcha },
    { label: "Aksessuarlar", id: 5, image: iconcha },
    { label: "Sport", id: 6, image: iconcha },
    { label: "Oyinchoqlar", id: 7, image: iconcha },
    { label: "Salomatlik", id: 8, image: iconcha },
    { label: "Salomatlik", id: 9, image: iconcha },
    { label: "Salomatlik", id: 10, image: iconcha },
    { label: "Salomatlik", id: 11, image: iconcha },
    { label: "Salomatlik", id: 12, image: iconcha },
    { label: "Salomatlik", id: 13, image: iconcha },
  ];

  return (
    <div className="flex w-full min-w-0 items-center gap-4 overflow-hidden py-3">
      <button
        type="button"
        aria-label="Oldingi kategoriya"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <ChevronLeft size={20} />
      </button>

      <div className="min-w-0 flex-1">
        <Slider ref={sliderRef} {...settings}>
          {categoriesData.map((item) => (
            <div key={item.id} className="px-2 pb-4">
              <div className={`flex min-h-24 items-center gap-3 rounded-lg border border-gray-20 p-3 shadow-sm ${isSun ? "bg-black text-white" : "bg-white"}`}>
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-16 w-16 shrink-0 rounded border border-gray-300 object-cover"
                />
                <span className="text-lg font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <button
        type="button"
        aria-label="Keyingi kategoriya"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Image + name of each provider
const providers = [
  { name: 'Meta AI', img: '/meta.png' },
  { name: 'DeepSeek', img: '/deepseek.jpg' },
  { name: 'Open AI', img: '/openai.png' },
  { name: 'Qwen', img: '/Qwen.webp' },
  { name: 'Meta AI', img: '/meta.png' },
  { name: 'DeepSeek', img: '/deepseek.jpg' },
  { name: 'Open AI', img: '/openai.png' },
  { name: 'Qwen', img: '/Qwen.webp' },
];

const Slider = () => {
  // Repeat slides to make loop smoother
  const repeatedProviders = [...providers, ...providers];

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-[1440px] mx-auto text-center">
      <hr className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded" />
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Supported AI Image Carousel
        </h2>

        <Swiper
          spaceBetween={40} // Gap between slides
          slidesPerView={4}
          loop={true}
          speed={500}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
        //   pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            320: { slidesPerView: 4 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 7 },
          }}
        >
          {repeatedProviders.map((provider, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center gap-1 transition-transform duration-300 hover:scale-105">
                <img
                  src={provider.img}
                  alt={provider.name}
                  className="w-24 h-24 object-contain rounded-md"
                />
                <p className="text-sm font-medium">{provider.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

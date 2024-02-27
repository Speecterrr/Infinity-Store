import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CarroselDetails.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function CarroselDetails() {
  AOS.init()
  return (
    <>
      <Swiper
        data-aos="fade-up"
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/CarroselImages/imageOne.png" alt="imageOneDetails" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/CarroselImages/imageTwo.png" alt="imageTwoDetails" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/CarroselImages/imageThird.png" alt="imageThirdDetails" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/CarroselImages/imageFour.png" alt="imageFourDetails" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

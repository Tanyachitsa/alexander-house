import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HouseCard from "./HouseCard";
import React from "react";

import { africaHouses } from "../data/house";

export default function AfricaHouses() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {africaHouses.map((house, index) => (
          <SwiperSlide key={index}>
            <HouseCard
              image={house.image}
              info={house.info}
              name={house.name}
              location={house.location}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

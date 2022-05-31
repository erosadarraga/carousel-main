import React from "react";
import { SiWhatsapp } from 'react-icons/si';

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="bg-slate-500">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />

          <div className="slide-title">
            <a href={slide.description}>
              <button type="button" className="text-white  opacity-80 bg-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <SiWhatsapp className="w-4 h-4 mr-2 -ml-1 " />
                Unete con Whatsapp
              </button>
            </a>

          </div>


        </div>
      ))
      }
    </section >
  );
}

export default SliderContent;

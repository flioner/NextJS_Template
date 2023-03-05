import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import s from "./slider.module.css";
import { Modal } from "../modal/modal";
import Link from "next/link";

const ProfileSlider = ({ images }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalKey, setKey] = useState(0);
  const [oldKey, newKey] = useState(0);
  const [empty, isEmpty] = useState(false);

  function openModal(id) {
    if (oldKey == id) {
      setKey(id);
      setIsOpen(true);
      console.log("open");
    }
  }

  function IfNotEqual(id) {
    if (oldKey != id && !empty) {
      setKey(id);
    }
    isEmpty(true);
  }

  function IfNotEqualAndEmpty(universidad) {
    isEmpty(universidad == null);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Swiper
      loop={true}
      onSlideChangeTransitionEnd={(swiper) => {
        newKey(swiper.realIndex), IfNotEqual(swiper.realIndex);
      }}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={35}
      mousewheel={true}
      modules={[Mousewheel, Autoplay]}
      slideToClickedSlide={true}
    >
      {images.map(({ id, src, nombre }) => (
        <SwiperSlide className={s.profileSlide} key={id}>
          <img
            onClick={() => openModal(id)}
            className={s.imageCrop}
            src={src}
          />
          <div className={s.text}> {nombre}</div>
        </SwiperSlide>
      ))}
      {images.map(({ id, universidad, social, urlUniversidad, socialUrl }) => (
        <Modal
          float={false}
          isOpen={
            modalIsOpen &&
            modalKey === id &&
            (universidad != null || social != null)
          }
          setOpen={setIsOpen}
          key={id}
        >
          <div className={s.profileModal}>
            <img
              className={s.icon}
              src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666317402/tuempresaenlinea/icons/closeIcon_aksvjy.png"
              onClick={() => closeModal()}
            />
            <a
              className={s.url}
              href={urlUniversidad}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={universidad != null ? s.modalImg : s.hidden}
                onAnimationStartCapture={() => IfNotEqualAndEmpty(universidad)}
                src={universidad}
              />
            </a>

            <a
              className={s.url}
              href={socialUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img
                onAnimationStartCapture={() => IfNotEqualAndEmpty(universidad)}
                className={social != null ? s.modalImg : s.hidden}
                src={social}
              />
            </a>
          </div>
          <div className={s.bgModal} onClick={() => closeModal()} />
        </Modal>
      ))}
    </Swiper>
  );
};

export { ProfileSlider };

const VerticalSlider = ({ images, scroll }) => {
  return (
    <Swiper
      className={s.verticalCont}
      direction={"vertical"}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      slidesPerView={1.5}
      centeredSlides={true}
      spaceBetween={15}
      mousewheel={scroll}
      modules={[Mousewheel, Autoplay]}
    >
      {images.map(({ id, src, titulo, desc, url }) => (
        <SwiperSlide className={s.slide} key={id}>
          <div className={s.verticalSlide}>
            <img className={s.verticalImg} src={src} />
            <div className={s.verticalTextCont}>
              <div className={s.verticalCenter}>
                <a href={url} target="_blank" rel="noreferrer">
                  <div className={s.verticalTitle}>{titulo}</div>
                </a>
                <div className={s.verticalDesc}>{desc}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { VerticalSlider };

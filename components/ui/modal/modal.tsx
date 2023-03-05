import React, { useState } from "react";
import s from "./modal.module.css";

const Modal = ({ isOpen, setOpen, float, children }) => {
  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <div className={s.fitScreen4}>
      <div className={isOpen ? (float ? s.modalFloat : s.modal) : s.modal2}>
        {children}
      </div>
    </div>
  );
};

export { Modal };

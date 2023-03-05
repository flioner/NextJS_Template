import React, { useState } from "react";
import s from "./contact.module.css";
import { Modal } from "../modal/modal";
import { useForm, ValidationError } from "@formspree/react";

const Contact = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm("API_KEY");
  const [sub, setSub] = useState(false);

  const handleSub = () => {
    setSub(true);
  };
  const subOff = () => {
    setSub(false);
  };

  function openModal(id) {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div onClick={openModal}> {children} </div>
      <Modal float={true} isOpen={modalIsOpen} setOpen={setIsOpen}>
        <div className={s.contactForm}>
          <form className={s.contactCont} onSubmit={handleSubmit}>
            <img
              className={s.icon}
              src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666317402/tuempresaenlinea/icons/closeIcon_aksvjy.png"
              onClick={() => closeModal()}
            />
            <label className={s.email} htmlFor="email">
              Email Address
            </label>
            <div className={s.break} />
            <input
              className={s.emailBox}
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className={s.break} />
            <label className={s.email} htmlFor="message">
              Message
            </label>
            <div className={s.break} />
            <textarea className={s.messageBox} id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div className={s.break2} />

            <button
              type="submit"
              disabled={state.submitting}
              className={s.submit}
              onClick={handleSub}
            >
              Submit
            </button>
            <Modal float={true} isOpen={sub} setOpen={handleSub}>
              <div className={s.modalModal}>
                <img
                  className={s.icon}
                  src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666317402/tuempresaenlinea/icons/closeIcon_aksvjy.png"
                  onClick={() => closeModal()}
                />
                Se ha enviado su mensaje!
              </div>
              <div className={s.bgModal} onClick={() => subOff()} />
            </Modal>
          </form>
        </div>
        <div className={s.bgModal} onClick={() => closeModal()} />
      </Modal>
    </div>
  );
};

export { Contact };

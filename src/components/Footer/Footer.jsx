import s from "./Footer.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import Loader from "../Loader/Loader";
import { ReactComponent as Love } from "../../icons/love.svg";
import { ReactComponent as GitHub } from "../../icons/github.svg";
import { ReactComponent as Linkedin } from "../../icons/linkedin.svg";
import { ReactComponent as Close } from "../../icons/close.svg";
import { teamOperations, teamSelectors } from "../../redux/team";

Modal.setAppElement("#root");

export default function Footer() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => dispatch(teamOperations.getDevelopers()), [dispatch]);

  const developers = useSelector(teamSelectors.getDevelopers);
  const isLoading = useSelector(teamSelectors.getIsLoading);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <footer className={s.footer}>
      <p className={s.copyright}>&copy; 2022 | All Rights Reserved |</p>
      <span>Developed with</span>
      <Love />
      <span>by</span>
      <div className={s.modalClick} onClick={openModal}>
        GoIT Students
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName={s.modal_overlay}
        contentLabel='Example Modal'
        className={s.team__modal}
        htmlOpenClassName={s.no_scroll}
      >
        <button className={s.btn_cross} onClick={closeModal}>
          <Close />
        </button>
        <div className={s.team__placeholder}>
          <ul className={s.team__cards}>
            {developers.map((developer) => {
              return (
                <li key={developer._id} className={s.team__item}>
                  <a className={s.team__thumb} href={developer.github}>
                    <img
                      className={s.team__img}
                      src={developer.photo}
                      alt={developer.name}
                    />
                  </a>

                  <p className={s.team__name}>{developer.name}</p>
                  <p className={s.team__description}>{developer.role}</p>
                  <div className={s.links__container}>
                    <a className={s.link_linkedin} href={developer.github}>
                      <GitHub />
                    </a>
                    <a className={s.link_github} href={developer.linkedin}>
                      <Linkedin />
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {isLoading && <Loader />}
      </Modal>
    </footer>
  );
}

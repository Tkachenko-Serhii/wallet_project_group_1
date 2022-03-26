import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from "react-redux";
import { ReactComponent as Close } from '../../icons/close.svg';
import { useTranslation } from 'react-i18next';
import isModalLogoutOpen from '../../redux/modalLogout/modalLogoutAction';
import css from "./ModalLogout.module.css";
import Button from '../Button';
import Logo from "../Logo";
import userOperations from '../../redux/user/userOperations';

const modalRoot = document.querySelector('#modal-logout-root');

export default function ModalLogout() {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    useEffect(() => {
        document.body.style.overflow = "hidden";
    });

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    });

    useEffect(() => {
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const toggleModal = (event) => {
        dispatch(isModalLogoutOpen());
        document.body.style.overflow = "visible";
    };

    const handleKeyDown = event => {
        if (event.code === 'Escape') {
            toggleModal()
        }
    };

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            toggleModal()
        }
    };

    return createPortal(
        <div className={css.overlay} onClick={handleBackdropClick}>
            <div className={css.modal}>
                <Logo />
                <button className={css.closeButton} onClick={toggleModal}>
                    <Close />
                </button>
                <h4 className={css.title}>{t("sure")}</h4>
                <Button type="button" text={t("continue")} color="green" onClick={() => dispatch(userOperations.logout())} />
                <Button
                    text={t("cancel")}
                    color="white"
                    type="button"
                    onClick={toggleModal}
                />
            </div>
        </div>,
        modalRoot,
    );
}
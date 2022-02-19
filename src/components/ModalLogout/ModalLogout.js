import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from "react-redux";
import { ReactComponent as Close } from '../../icons/close.svg';
import isModalLogoutOpen from '../../redux/modalLogout/modalLogoutAction';
import css from "./ModalLogout.module.css";
import Button from '../Button';
import Logo from "../Logo";
import userOperations from '../../redux/user/userOperations';

const modalRoot = document.querySelector('#modal-logout-root');

export default function ModalLogout() {
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    });

    useEffect(() => {
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleKeyDown = event => {
        if (event.code === 'Escape') {
            dispatch(isModalLogoutOpen())
        }
    };

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            dispatch(isModalLogoutOpen())
        }
    };

    return createPortal(
        <div className={css.overlay} onClick={handleBackdropClick}>
            <div className={css.modal}>
                <Logo />
                <button className={css.closeButton} onClick={() => dispatch(isModalLogoutOpen())}>
                    <Close />
                </button>
                <h4 className={css.title}>Are you sure you want to logout?</h4>
                <Button type="button" text="Continue" color="green" onClick={() => dispatch(userOperations.logout())} />
                <Button
                    text="Cancel"
                    color="white"
                    type="button"
                    onClick={() => dispatch(isModalLogoutOpen())}
                />
            </div>
        </div>,
        modalRoot,
    );
}
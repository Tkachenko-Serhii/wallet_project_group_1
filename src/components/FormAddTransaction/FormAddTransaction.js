
import { useState } from "react";
import { useDispatch } from "react-redux";
import Select from 'react-select'
import { stylesSelect } from './stylesForSelect'
import "react-datetime/css/react-datetime.css";

import showModal from '../../redux/modal/modalActions';
// import Modal from 'react-modal'
// import Datetime from "react-datetime";

import { ReactComponent as Plus } from '../../icons/plus.svg'
import { ReactComponent as Minus } from '../../icons/minus.svg'
import { ReactComponent as CalendarIcon } from '../../icons/calendar.svg'
import { ReactComponent as Close } from '../../icons/close.svg'

import Button from '../Button';
import DatePicker from '../DatePicker';
import styles from './FormAddTransaction.module.css';

// Modal.setAppElement('#root')

export default function ModalAddTransaction(props) {

    const defaultTransactionState = {
        income: false,
        amount: '',
        date: new Date(),
        comment: '',
        category: '',
    }

    const [transaction, setTransaction] = useState(defaultTransactionState);
    const dispatch = useDispatch();
    // const [modalIsOpen, setIsOpen] = useState(false)


    const categories = [
        { value: "Main", label: "Основной" },
        { value: "Food", label: "Еда" },
        { value: "Car", label: "Авто" },
        { value: "Development", label: "Развитие" },
        { value: "Children", label: "Дети" },
        { value: "Home", label: "Дом" },
        { value: "Education", label: "Образование" },
        { value: "Other", label: "Остальные" },
    ]

    // function openModal() {
    //     setIsOpen(true)
    // }

    // function closeModal() {
    //     setIsOpen(false)
    // }

    const handleInputChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'income':
                if (transaction.income === false) {
                    updateTransaction(name, true)
                }
                else {
                    updateTransaction(name, false)
                }

                break;

            case 'amount':
                updateTransaction(name, value)
                break;

            case 'comment':
                updateTransaction(name, value)
                break;

            default:
                return;
        }
    }

    const updateTransaction = (name, value) => {
        setTransaction((prev) => ({ ...prev, [name]: value }))
    }

    const resetForm = (event) => {
        event.preventDefault();

        setTransaction(defaultTransactionState)
        // closeModal()
        // dispatch(showModal())
    }


    return (

        <>
            {/* <button className={styles.openButton} onClick={openModal}>
                <Plus />
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName={styles.modalOverlay}
                contentLabel="Example Modal"
                className={styles.modalContainer}
                htmlOpenClassName="no-scroll"
            > */}

            <form
                // onSubmit={handleSubmit}
                className={styles.form} >

                <button className={styles.closeButton} onClick={(event) => dispatch(showModal())}>
                    <Close />
                </button>
                <h4 className={styles.title}>Добавить транзакцию</h4>


                <div className={styles.swichContainer}>
                    <span className={styles.swichTitle}>Доход</span>

                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            name="income"
                            onChange={handleInputChange}
                            checked={!transaction.income}
                        />
                        <div className={styles.slider}>
                            <div className={styles.indicator}>
                                {transaction.income ? <Plus /> : <Minus />}
                            </div>
                        </div>
                    </label>
                    <span className={styles.swichTitle}>Расход</span>
                </div>


                {!transaction.income ? <div className={styles.categoriesContainer}>
                    <Select
                        placeholder="Выберите категорию"
                        options={categories}
                        styles={stylesSelect()}
                        onChange={(option) => {
                            updateTransaction('category', option.value)
                        }} />
                </div>
                    : null
                }

                <div className={styles.amountAndDateContainer}>
                    <div className={styles.dateContainer}>
                        <label className={styles.labelForm}>
                            <input
                                type="text"
                                name="amount"
                                placeholder='0.00'
                                className={styles.inputForm}
                                onChange={handleInputChange}
                                required />
                        </label>
                    </div>

                    <div className={styles.datepickerContainer}>
                        <DatePicker date={transaction.date} updateDate={updateTransaction} />
                        <CalendarIcon className={styles.calendarIcon} />
                    </div>

                </div>

                <label className={styles.labelForm}>
                    <input
                        type="text"
                        name="comment"
                        placeholder='Коментарий'
                        className={styles.inputComment}
                        onChange={handleInputChange}
                        required />
                </label>
                <Button text="Добавить" color="green" />
                <Button
                    text="Отмена"
                    color="white"
                    onClick={resetForm} />
            </form >
            {/* </Modal> */}
        </>
    )
}








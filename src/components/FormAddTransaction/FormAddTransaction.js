
import { useState } from "react";
// import { useDispatch } from "react-redux";


import Button from '../Button';
import DatePicker from '../DatePicker';
import styles from './FormAddTransaction.module.css';

export default function FormAddTransaction(props) {
    const [income, setIncome] = useState(true);
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    const [comment, setComment] = useState("");
    // const dispatch = useDispatch();



    const handleInputChange = event => {
        console.log(event.currentTarget.value)
        const { name, value } = event.currentTarget;
        console.log(event.currentTarget)

        switch (name) {
            case 'income':
                setIncome(value);
                break;

            case 'amount':
                setAmount(value);
                break;

            case 'comment':
                setComment(value);
                break;

            case 'date':
                setDate(value);
                break;

            default:
                return;
        }
    }

    const resetForm = (event) => {
        event.preventDefault();
        setIncome('');
        setAmount('');
        setComment('');
        setDate('');
    }


    return (

        <form
            // onSubmit={handleSubmit}
            className={styles.form} >
            <h4 className={styles.title}>Добавить транзакцию</h4>


            <div className={styles.swichContainer}>
                <span className={styles.swichTitle}>Доход</span>

                <label className={styles.switch}>
                    <input
                        type="checkbox"
                        name="income"
                        onChange={handleInputChange} />
                    <span className={styles.slider}></span>
                </label>
                <span className={styles.swichTitle}>Расход</span>
            </div>

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
                <DatePicker />
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
    )
}








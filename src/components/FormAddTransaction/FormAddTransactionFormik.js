import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select'
import { stylesSelect } from './stylesForSelect'
import "react-datetime/css/react-datetime.css";
import { useFormik, Field, } from 'formik';

import showModal from '../../redux/modal/modalActions';
import { transactionsOperations } from "../../redux/transactions";
import { categoriesOperations, categoriesSelectors } from "../../redux/categories"

import { ReactComponent as Plus } from '../../icons/plus.svg'
import { ReactComponent as Minus } from '../../icons/minus.svg'
import { ReactComponent as CalendarIcon } from '../../icons/calendar.svg'
import { ReactComponent as Close } from '../../icons/close.svg'

import Button from '../Button';
import DatePicker from '../DatePicker';
import styles from './FormAddTransaction.module.css';
import Loader from '../Loader/Loader';

import { formAddTransactionSchema } from '../../utils';



export default function ModalAddTransaction(props) {

    const DEFAULT_TRANSACTION_STATE = {
        type: false,
        sum: '',
        date: new Date(),
        comment: '',
        category: 'Вasic costs',
    }
    // const [category, setCategory] = useState('Вasic costs');

    const isLoading = useSelector(categoriesSelectors.getIsLoading);
    const categories = useSelector(categoriesSelectors.getCategories)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoriesOperations.getCategories())
    }, [dispatch]);

    // const updateCategory = (value) => {
    //     setCategory(value)
    // }

    // console.log(category)


    const formik = useFormik({
        initialValues: DEFAULT_TRANSACTION_STATE,
        validationSchema: formAddTransactionSchema,
        onSubmit: (values) => {
            const { type, category, sum, date, comment } = values;
            console.log(dispatch(
                transactionsOperations.createTransaction({

                    type,
                    sum,
                    date: date.toLocaleDateString(),
                    month: date.getMonth() + 1,
                    year: date.getFullYear(),
                    comment,
                    category,
                })
            ))
            dispatch(
                transactionsOperations.createTransaction({

                    type,
                    sum,
                    date: date.toLocaleDateString(),
                    month: date.getMonth() + 1,
                    year: date.getFullYear(),
                    comment,
                    category,
                })
            );
            formik.handleReset();
        }
    });


    return (
        <form
            onSubmit={formik.handleSubmit}
            className={styles.form}
        >


            <button type="button" className={styles.closeButton} onClick={(event) => dispatch(showModal())}>
                <Close />
            </button>
            <h4 className={styles.title}>Add transaction</h4>

            <div className={styles.swichContainer}>
                <span className={styles.swichTitle}>Income</span>

                <label className={styles.switch}>
                    <input
                        type="checkbox"
                        name="type"
                        value={formik.values.type}
                        onChange={formik.handleChange}
                    />
                    <div className={styles.slider}>
                        <div className={styles.indicator}>
                            {formik.values.type ? <Plus /> : <Minus />}
                        </div>
                    </div>
                </label>
                <span className={styles.swichTitle}>Expense</span>
            </div>

            <div className={styles.categoriesContainer}>
                <Select
                    placeholder="Select a category "
                    options={categories.filter(category => category.type === formik.values.type)}

                    styles={stylesSelect()}
                    onChange={formik.handleChange}
                    value={formik.values.category}
                />
            </div>

            <div className={styles.amountAndDateContainer}>
                <div className={styles.dateContainer}>
                    <label className={styles.labelForm}>
                        <input
                            type="number"
                            name="sum"
                            placeholder='0.00'
                            className={styles.inputForm}
                            onChange={formik.handleChange}
                            value={formik.values.sum}
                            required
                        />
                    </label>
                </div>

                <div className={styles.datepickerContainer}>
                    <DatePicker date={formik.values.date} />
                    <CalendarIcon className={styles.calendarIcon} />
                </div>

            </div>

            <label className={styles.labelForm}>
                <input
                    type="text"
                    name="comment"
                    placeholder='Comment'
                    className={styles.inputComment}
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                />
            </label>
            <Button type="submit" text="Add" color="green" />
            <Button
                type="button"
                text="Cancel"
                color="white"
                onClick={formik.handleReset}
            />
            {isLoading && <Loader />}
        </form >
    )
}


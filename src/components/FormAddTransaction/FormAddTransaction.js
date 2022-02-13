
import { useState } from "react";
// import { useDispatch } from "react-redux";
import Select from 'react-select'
import { stylesSelect } from './stylesForSelect' 
import { ReactComponent as Plus } from '../../icons/plus.svg'
import { ReactComponent as Minus } from '../../icons/minus.svg'
import { ReactComponent as CalendarIcon } from '../../icons/calendar.svg'

import Button from '../Button';
import DatePicker from '../DatePicker';
import styles from './FormAddTransaction.module.css';

export default function FormAddTransaction(props) {

    const [income, setIncome] = useState(false);
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    const [comment, setComment] = useState("");

    const [category, setCategory] = useState(" ");

    // const dispatch = useDispatch();

    // const [transactionType , setTransactionType] = useState('-')

    const categories = [
        {value: "Main" , label: "Основной"},
        {value: "Food" , label: "Еда"},
        {value: "Car" , label: "Авто"},
        {value: "Development" , label: "Развитие"},
        {value: "Children" , label: "Дети"},
        {value: "Home" , label: "Дом"},
        {value: "Education" , label: "Образование"},
        {value: "Other" , label: "Остальные"},
    ]

   console.log(income);

    const handleInputChange = event => {
        console.log(event.currentTarget.value)
        const { name, value } = event.currentTarget;
        console.log(event.currentTarget)

        switch (name) {
            case 'income':
                if(income === false){
                    setIncome(true);
                }
                else{
                    setIncome(false);
                }
                
                
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
                        onChange={handleInputChange}
                        checked={!income}
                         />
                    <div className={styles.slider}>
                        <div className={styles.indicator}>
                            { income ?  <Plus /> : <Minus/> }
                        </div>
                    </div>
                </label>
                <span className={styles.swichTitle}>Расход</span>
            </div>

               
             { !income ? <div className={styles.categoriesContainer}>
                            <Select 
                                    placeholder="Выберите категорию" 
                                    options={categories} 
                                    styles={stylesSelect()}
                                    onChange={(option) => {
                                        setCategory(option.value)
                                      }}/>
                         </div> 
                        : null
            }
                

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

                <div className={styles.datepickerContainer}>
                    <DatePicker  />
                    <CalendarIcon  className={styles.calendarIcon}  />
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
    )
}








import { useState } from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";
import styles from './DataPicker.module.css';


export default function DatePicker(props) {
    const [date, setDate] = useState({ date: moment(new Date()).format('DD-MM-YYYY')});

    console.log('date',date);
    return (
        <Datetime
            className={styles.input}
            dateFormat="DD-MM-YYYY"
            timeFormat={false}
            value={date}
            onChange={(date) => setDate(date)} />
    )
}

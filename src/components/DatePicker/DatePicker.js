import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import styles from './DataPicker.module.css';


export default function DatePicker({ date, updateDate }) {
    return (
        <Datetime
            className={styles.input}
            dateFormat="DD-MM-YYYY"
            timeFormat={false}
            value={date}
            onChange={(moment) => {
                updateDate('date', moment._d)
            }}
        />
    )
}

import { useState } from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";


export default function DatePicker(props) {
    const [date, setDate] = useState({ date: moment() });


    return (
        <Datetime
            dateFormat="DD-MM-YYYY"
            timeFormat={false}
            defaultValue={moment(date)}
            onChange={(date) => setDate(date)} />
    )
}

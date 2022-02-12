import propTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ text, color = 'green', onClick }) {
    return (
        <button
            type="submit"
            className={`${styles[color]}`}>
            {text}
        </ button>
    )
}

Button.prototypes = {
    text: propTypes.string,
    color: propTypes.oneOf(['green', 'white']),
    onClick: propTypes.func
}
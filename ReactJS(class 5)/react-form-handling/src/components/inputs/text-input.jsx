import styles from './text-input.module.css';
import { FaUser } from "react-icons/fa";
export default function TextInput(props) {
    return (<div>
        {/* icon */}
        <div className={styles.input_container}>
            {props.isIcon && <span>{props.icon}</span>}

            <div className={styles.input_field}>
                <input
                    type={props.type}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                />
            </div>
        </div>

        {props.required && <div><small className={styles.input_err}>{props.err_msg ?? "required"}</small></div>
        }
    </div>);
}
import { useState } from 'react';
import styles from './singup.module.css';
import TextInput from '../../components/inputs/text-input';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function SignupPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [form_valid, setFormValid] = useState(true)

    let is_valid = name && email

    function handleFormSubmit(e) {
        e.preventDefault();

        if (is_valid) {
            alert("Form Submit")
        } else {
            setFormValid(false)
        }
    }



    return (
        <div className={styles.auth_wrapper}>
            <div className="row">
                <div className="col-xl-4 col-md-6 col-9 mx-auto">
                    <form action="" onSubmit={handleFormSubmit} className={styles.form_container}>

                        <TextInput
                            type="text"
                            value={name}
                            onChange={setName}
                            icon={<FaUser />}
                            isIcon
                            required={!form_valid && name.length == 0}
                            err_msg="username is required"
                        />
                        <TextInput
                            type="email"
                            value={email}
                            onChange={setEmail}
                            icon={<MdEmail />}
                            isIcon
                            required={!form_valid && email.length == 0 }
                            err_msg="email is required"
                        />



                        <br />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>);
}
import { useContext, useState, useRef} from 'react';
import Styles from "./login.module.css";
import axios from 'axios';
import { VoteContext } from '../../context/VoteContext';
import OtpGroup from "../OtpGroup/OtpGroup";

const Login = () => {
    const [phone, setPhone] = useState("");
    const {data, updateVotes} = useContext(VoteContext);
    const [canShowOtp, setCanShowOtp] = useState(false);
    const ref = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (ref.current.reportValidity()) {
            setCanShowOtp(true); 
        }
    }

    const handleVerifyOtp = () => {
        updateVotes({
            ...data,
            auth: {isLoggedIn: true}
        });
    }

    return (
        <div className={Styles.wrapper}>
            {!canShowOtp && (
                <form>
                    <div className={Styles.small_container}>
                        <input ref={ref} type="phone" placeholder="Phone number (0244534567)" pattern ="^\d{10}$" required />
                        <button className={Styles.cta} onClick={handleLogin} type="submit">Login</button>
                    </div>
                </form>
            )}
            {canShowOtp && (
                <div>
                    <OtpGroup size ={6} handleAction={handleVerifyOtp}/>
                </div>
            )}
        </div>
    )
}

export default Login;

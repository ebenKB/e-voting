import { useContext, useState, useRef} from 'react';
import Styles from "./login.module.css";
import axios from 'axios';
import { VoteContext } from '../../context/VoteContext';
import OtpGroup from "../OtpGroup/OtpGroup";

// const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
// const authToken = process.env.REACT_APP_TWILIO_ACCOUNT_AUTH_TOKEN;


const Login = () => {
    const [phone, setPhone] = useState("");
    const {data, updateVotes} = useContext(VoteContext);
    const [canShowOtp, setCanShowOtp] = useState(false);
    const ref = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();
        // const data = {
        //     "To": "+233548086391",
        //     "Channel": 'sms',
        // }
        // const res = await axios.post("https://verify.twilio.com/v2/Services/VA662339136472ec3ba6a870c97e12275e/Verifications", data, {
        //     auth: {
        //         username: "AC09da2dc81d9e89a9aadb9d34ce71b6ca",
        //         password: "ec11f531dc04622da5195b48bd045cfc",
        //     }
        // });
        // console.log("request is done",res)

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

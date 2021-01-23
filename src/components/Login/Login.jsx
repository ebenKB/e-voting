import { useContext, useState, useRef} from 'react';
import Styles from "./login.module.css";
import { VoteContext } from '../../context/VoteContext';
import OtpGroup from "../OtpGroup/OtpGroup";
import Axios from "axios";

const Login = () => {
    const [phone, setPhone] = useState("");
    const {data, updateVotes} = useContext(VoteContext);
    const [canShowOtp, setCanShowOtp] = useState(false);
    const ref = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (ref.current.reportValidity()) {
            setCanShowOtp(true); 
            console.log(phone);
        }

        const options = {
            method: 'post',
            url: 'https://verify.twilio.com/v2/Services/VA662339136472ec3ba6a870c97e12275e/Verifications/',
            data: {
                To: "+233548086391",
                Channel: "sms"
            },
            headers: {
                "content-type": "application/json"
            },

            auth: {
                username: "AC09da2dc81d9e89a9aadb9d34ce71b6ca",
                password: "126a1493f7dd1f8038e9eda12a4b34ee"
            }
        }
        const data = await Axios(options);

        console.log("done", data)
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
                        <input 
                            ref={ref} 
                            type="phone"
                            placeholder="Phone number (0244534567)" 
                            pattern ="^\d{10}$" 
                            required 
                            onChange={(e) => setPhone(e.target.value)}
                        />
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

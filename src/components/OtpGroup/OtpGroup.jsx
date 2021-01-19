import { useState } from "react";
import Input from "../Input/input";
import Styles from "./Otp.module.css";

const OtpGroup = ({ size, handleAction }) => {
    const [currentOtp, setCurrentOtp] = useState("");
    const [currentFocus, setCurrentFocus] = useState(0);
    const [isVerifyingOpt, setVerify] = useState(true);

    const handleInputChange = (e, num) => {
        setCurrentFocus(num + 1);
        setCurrentOtp(currentOtp + e.target.value)

        if (currentOtp.length === (size - 1)) {
            handleVerifyAction()
        }
    }
    
    const handleVerifyAction  = () => {
        handleAction()
    }

    const createInputs = () => {
        let inputs = []
        for (let i=0; i < size; i++) {
            inputs.push(
            <Input handleChange={(e) => handleInputChange(e, i)}
                value = {currentOtp[i]}  canFocus={currentFocus === i}
            />)
        }
        return inputs;
    }
     
    return (
        <div className={Styles.otp_wrapper}>
            <h3>Enter the verification code sent to your phone.</h3>
            {createInputs()}
        </div>
    )
};

export default OtpGroup;

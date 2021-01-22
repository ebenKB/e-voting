import { useState, useEffect } from "react";
import Input from "../Input/input";
import Styles from "./Otp.module.css";
import Button from "../Button/Button";

const OtpGroup = ({ size, handleAction }) => {
    const [currentOtp, setCurrentOtp] = useState("");
    const [currentFocus, setCurrentFocus] = useState(0);
    const [timeLeft, setTimeLeft] = useState(120)

    useEffect(() => {
        let timeout = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1)
            }
        }, 1000)

        return () => clearInterval(timeout);
    })

    const getTimeDisplay = () => {
        const min =Math.floor( timeLeft / 60);
        const sec = timeLeft % 60;

        return (<span>
            {timeLeft > 0 && <span>({min} : {sec})</span>}
        </span>)
    }
    const handleInputChange = (e, num) => {
        const { value } = e.target;
        if (value !== "") {
            setCurrentFocus(num + 1);
            setCurrentOtp(currentOtp + value)
        }

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
            <h3>Enter the verification code sent to your phone. {getTimeDisplay()}</h3>
            {timeLeft === 0 && (
                <div>
                    <Button handleAction={() => setTimeLeft(120)} text="Resend code" />
                </div>
            )}
            {createInputs()}

            <div>
                Enter this text 444556
            </div>
        </div>
    )
};

export default OtpGroup;

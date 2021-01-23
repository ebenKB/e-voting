import { useContext} from 'react';
import Styles from "./image.module.css";
import Finger from "../../images/finger.png";
import { VoteContext } from "../../context/VoteContext";

const ImageHolder = ({candidate, image, lable="blue", name = "", slogan="", team="", handleAction, position, category, size}) => {
    let {data, updateVotes} = useContext(VoteContext)

    const handleVoteAction = () => {
        data["votes"] = {
            ...data["votes"], [category]: candidate
        }
        updateVotes(data)
        handleAction(position + 1);
    }

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.image_container}>
                <img src={candidate.image} alt="" />
            </div>
            <div className={Styles.content}>
                <h3>{candidate.name}</h3>
                <span>{candidate.slogan}</span>
            </div>
            <div className={`${Styles[candidate.lable]} ${Styles.lable}`}>{candidate.team}</div>
            <div className={Styles.overlay}>
                <div>
                    <img src={Finger} alt="" />
                </div>
                <button onClick={handleVoteAction}>VOTE</button>
            </div>
        </div>
    )
}

export default ImageHolder;
 
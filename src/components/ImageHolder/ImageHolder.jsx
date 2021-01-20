import { useContext} from 'react';
import Styles from "./image.module.css";
import Finger from "../../images/finger.png";
import { VoteContext } from "../../context/VoteContext";

const ImageHolder = ({image, lable="blue", name="", slogan="", team="", handleAction, position}) => {
    let {data, updateVotes} = useContext(VoteContext)

    const handleVoteAction = () => {
        handleAction(position + 1);
        updateVotes({...data, presidential: name})
    }

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.image_container}>
                <img src={image} alt="voter"/>
            </div>
            <div className={Styles.content}>
                <h3>{name}</h3>
                <span>{slogan}</span>
            </div>
            <div className={`${Styles[lable]} ${Styles.lable}`}>{team}</div>
            <div className={Styles.overlay}>
                <div>
                    <img src={Finger} alt="vote_icon" />
                </div>
                <button onClick={handleVoteAction}>VOTE</button>
            </div>
        </div>
    )
}

export default ImageHolder;
 
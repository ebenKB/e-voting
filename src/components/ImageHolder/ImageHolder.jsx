import { useContext} from 'react';
import Styles from "./image.module.css";
import Finger from "../../images/finger.png";
import { VoteContext } from "../../context/VoteContext";

const ImageHolder = ({image, lable="blue", name="", slogan="", team="", handleAction, position, category, size}) => {
    let {data, updateVotes} = useContext(VoteContext)

    const handleVoteAction = () => {
        updateVotes({...data, [category]: name})
        handleAction(position + 1);
        // if (position < size - 1) {
        //     handleAction(position + 1);
        // } else {
        //     handleAction(0);
        // }
    }

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.image_container}>
                <img src={image} alt="" />
            </div>
            <div className={Styles.content}>
                <h3>{name}</h3>
                <span>{slogan}</span>
            </div>
            <div className={`${Styles[lable]} ${Styles.lable}`}>{team}</div>
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
 
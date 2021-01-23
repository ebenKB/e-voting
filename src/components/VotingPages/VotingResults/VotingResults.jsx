import { useContext} from 'react';
import { VoteContext } from "../../../context/VoteContext";
import DisplayCandidate from '../../DisplayCandidate/DisplayCandidate';
import Styles from "./results.module.css";

const VotingResults = () => {
    const { data: {votes}} = useContext(VoteContext);
    const getVotes = () => {
        console.log("These are the votes", votes)
        const output = []
        for (const[key, value] of Object.entries(votes)) {
            if (value) {
                output.push(<DisplayCandidate candidate={value} category={key} />)
            }
        }
        return output.length > 0 ? output : <div>There are no votes cast</div>
    }
    return (
        <div className={Styles.wrapper}>
            {votes && (
                <>
                    <h1>VOTING RESULTS</h1>
                    {getVotes()}
                </>
            )}
        </div>)
}


export default VotingResults;

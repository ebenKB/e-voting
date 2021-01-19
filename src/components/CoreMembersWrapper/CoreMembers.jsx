import { useState } from 'react';
import ActionPanes from '../ActionPanes/ActionPanes';
import GeneralSecretary from '../VotingPages/GeneralSecretary/GenSec';
import Presidential from '../VotingPages/Presidential/Presidential';
import FinalSecretary from "../VotingPages/FinancialSecretary/FinancialSecretary"
import Vice from '../VotingPages/Vice/Vice';
import Styles from "./core.module.css";
import PublicRelations from '../VotingPages/PublicRelations/PublicRelations';
import GeneralOrganizer from '../VotingPages/GeneralOrganizer/GeneralOrganizer';
import CordinatingSecretary from '../VotingPages/CordinatingSecretary/CordinatingSecretary';
import PressAndInfo from '../VotingPages/PressAndInfo/PressAndInfo';
import ComputerPrefect from '../VotingPages/ComputerPrefect/ComputerPrefect';
import UtilityPrefect from '../VotingPages/UtilityPrefect/UtilityPrefect';

const CoreMembers = () => {
    const positionsOrder = ["presidential", "vice", "gensec", "finsec", "pro", "organizer", "cordsec", "press", "computer", "utility"]
    const [currentPane, setCurrentPane] = useState(0);

    const handleSelection = (val) => {
        setCurrentPane(val)
    }

   return (
    <div className={Styles.wrapper}>
        <ActionPanes 
            handleSelection = {handleSelection}
            currentPane={currentPane} 
        />
        <div>
            {positionsOrder && (
                <>
                    {positionsOrder[currentPane] === positionsOrder[0] &&
                    <Presidential handleSelection={handleSelection} position = {0} size={positionsOrder.length} />}
                    {positionsOrder[currentPane] === positionsOrder[1] && <Vice />}
                    {positionsOrder[currentPane] === positionsOrder[2] && <GeneralSecretary />}
                    {positionsOrder[currentPane] === positionsOrder[3] && <FinalSecretary />}
                    {positionsOrder[currentPane] === positionsOrder[4] && <PublicRelations />}
                    {positionsOrder[currentPane] === positionsOrder[5] && <GeneralOrganizer />}
                    {positionsOrder[currentPane] === positionsOrder[6] && <CordinatingSecretary />}
                    {positionsOrder[currentPane] === positionsOrder[7] && <PressAndInfo />}
                    {positionsOrder[currentPane] === positionsOrder[8] && <ComputerPrefect />}
                    {positionsOrder[currentPane] === positionsOrder[9] && <UtilityPrefect />}
                </>
            )}
        </div>
    </div>
   )
}

export default CoreMembers;
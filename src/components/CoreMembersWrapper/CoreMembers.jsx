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
import VotingMessage from '../VotingPages/VotingMessage/VotingMessage';

const CoreMembers = () => {
    const positionsOrder = ["presidential", "vice", "gensec", "finsec", "pro", "organizer", "cordsec", "press", "computer", "utility", "results"]
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
                    <Presidential 
                        category="presidential"
                        handleSelection={handleSelection} 
                        position = {0} 
                        size={positionsOrder.length} 
                    />}
                    
                    {positionsOrder[currentPane] === positionsOrder[1] &&
                    <Vice 
                        handleSelection={handleSelection} 
                        position={1} 
                        size={positionsOrder.length}
                        category="vice_presidential"
                    />}

                    {positionsOrder[currentPane] === positionsOrder[2] &&
                    <GeneralSecretary 
                        category="general_secretary" 
                        size={positionsOrder.length} 
                        handleSelection={handleSelection}
                        position={2}
                    />}

                    {positionsOrder[currentPane] === positionsOrder[3] &&
                    <FinalSecretary 
                        category="financial_secretary"
                        position={3}
                        size={positionsOrder.length}
                        handleSelection={handleSelection}
                    />}

                    {positionsOrder[currentPane] === positionsOrder[4] &&
                    <PublicRelations
                        category="public_relations_officer"
                        size={positionsOrder.length}
                        position={4}
                        handleSelection={handleSelection}
                    />}

                    {positionsOrder[currentPane] === positionsOrder[5] &&
                    <GeneralOrganizer
                        category="general_organizer"
                        size={positionsOrder.length}
                        position={5}
                        handleSelection={handleSelection}
                    />}

                    {positionsOrder[currentPane] === positionsOrder[6] &&
                    <CordinatingSecretary
                        category="cordinating_secretary"
                        size={positionsOrder.length}
                        position={6}
                        handleSelection={handleSelection}
                    />}

                    {positionsOrder[currentPane] === positionsOrder[7] &&
                    <PressAndInfo
                        category="press_and_info"
                        position={7}
                        size={positionsOrder.length}
                        handleSelection={handleSelection}
                    />}

                    {positionsOrder[currentPane] === positionsOrder[8] && 
                    <ComputerPrefect
                        category="computer_prefect"
                        position={8}
                        size={positionsOrder.length}
                        handleSelection={handleSelection}
                    />}

                    {positionsOrder[currentPane] === positionsOrder[9] &&
                    <UtilityPrefect
                        category="utility_prefect"
                        position={9}
                        size={positionsOrder.length}
                        handleSelection={handleSelection}
                    />}

                    {positionsOrder[currentPane] === positionsOrder[10] && (<VotingMessage />)}
                </>
            )}
        </div>
    </div>
   )
}

export default CoreMembers;
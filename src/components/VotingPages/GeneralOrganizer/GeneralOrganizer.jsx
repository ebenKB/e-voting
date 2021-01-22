import ImageHolder from "../../ImageHolder/ImageHolder";
import Wrapper from "../../VotersWrapper/VotersWrapper";
import Faker from 'faker';
import Image from "../../../images/gsec.jpg";
import { useContext } from "react";
import { VoteContext } from "../../../context/VoteContext";

const GeneralOrganizer = ({handleSelection, position, size, category}) => {
    const {checkIfVoted, clearVote}  = useContext(VoteContext);

    const teams = [
        {
            name: Faker.name.firstName() +" "+ Faker.name.lastName(),
            slogan:"God dey",
            team:"Blue Team",
            lable:"blue",
            image: Image,
        },
        {
            name: Faker.name.firstName() +" "+ Faker.name.lastName(),
            slogan: "Info at its best",
            team:"Royal Team",
            lable:"royal",
            image: Image
        },
        {
            name: Faker.name.firstName() +" "+ Faker.name.lastName(),
            slogan: "Keep your ears listening",
            team:"Best info for everyone",
            lable:"magenta" ,
            image: Image
        },
        {
            name: Faker.name.firstName() +" "+ Faker.name.lastName(),
            slogan: "No disappointments",
            team:"Gold Team",
            lable:"gold",
            image: Image
        },
    ]

    return (
        <>
            {checkIfVoted(category) && (
                <>
                    <h3>You have already voted for Public Relations.</h3>
                    <button onClick={() => clearVote(category)}>Clear Vote</button>
                </>
            )}
            <Wrapper>
                {!checkIfVoted(category) && (
                    teams.map((team) =>
                        <ImageHolder
                            image = {team.image} 
                            name={team.name} 
                            slogan={team.slogan} 
                            team={team.team}
                            lable={team.lable}
                            handleAction = {handleSelection}
                            position={position}
                            size={size}
                            category={category}
                        />)
                )}
            </Wrapper>
        </>
    )
}

export default GeneralOrganizer;

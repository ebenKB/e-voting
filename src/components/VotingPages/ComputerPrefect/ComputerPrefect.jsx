import ImageHolder from "../../ImageHolder/ImageHolder";
import Wrapper from "../../VotersWrapper/VotersWrapper";
import Faker from 'faker';
import Image from "../../../images/computer.jpg";
import { useContext } from "react";
import { VoteContext } from "../../../context/VoteContext";

const ComputerPrefect = ({handleSelection, position, size, category}) => {
    const {checkIfVoted, clearVote}  = useContext(VoteContext);

    const candidates = [
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
                    <h3>You have already voted for Computer Prefect.</h3>
                    <button onClick={() => clearVote(category)}>Clear Vote</button>
                </>
            )}
            <Wrapper>
                {!checkIfVoted(category) && (
                    candidates.map((candidate) =>
                        <ImageHolder
                            handleAction = {handleSelection}
                            position={position}
                            size={size}
                            category={category}
                            candidate={candidate}
                        />)
                )}
            </Wrapper>
        </>
    )
}

export default ComputerPrefect;

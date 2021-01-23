import ImageHolder from "../../ImageHolder/ImageHolder";
import Wrapper from "../../VotersWrapper/VotersWrapper";
import Faker from 'faker';
import Image from "../../../images/zuk.png";
import { useContext } from "react";
import { VoteContext } from "../../../context/VoteContext";

const Vice = ({handleSelection, position, size, category}) => {
    const {checkIfVoted, clearVote}  = useContext(VoteContext);

    const candidates = [
        {
            name: Faker.name.firstName() +" "+ Faker.name.lastName(),
            slogan: Faker.lorem.sentence(5, 5),
            team:"Blue Team",
            lable:"blue",
            image: Image,
        },
        {
            name: Faker.name.firstName() +" "+ Faker.name.lastName(),
            slogan: Faker.lorem.sentence(5),
            team:"Royal Team",
            lable:"royal",
            image: Image
        },
        {
            name: Faker.name.firstName() +" "+ Faker.name.lastName(),
            slogan: Faker.lorem.sentence(5),
            team:"Magenta Team",
            lable:"magenta" ,
            image: Image
        },
        {
            name: Faker.name.firstName() +" "+ Faker.name.lastName(),
            slogan: Faker.lorem.sentence(5),
            team:"Gold Team",
            lable:"gold",
            image: Image
        },
    ]

    return (
        <>
            {checkIfVoted(category) && (
                <>
                    <h3>You have already voted for vice presidential</h3>
                    <button onClick={() => clearVote(category)}>Clear Vote</button>
                </>
            )}
            <Wrapper>
                {!checkIfVoted(category) && (
                    candidates.map((candidate) =>
                        <ImageHolder
                            candidate={candidate}
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

export default Vice;

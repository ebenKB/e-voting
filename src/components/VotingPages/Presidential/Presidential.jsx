import ImageHolder from "../../ImageHolder/ImageHolder";
import Image from "../../../images/pres_1.jpg"
import { useContext } from "react";
import { VoteContext }  from "../../../context/VoteContext";
import  Wrapper from "../../VotersWrapper/VotersWrapper";

const Presidential = ({handleSelection, position, size, category}) => {
    let {checkIfVoted, clearVote} = useContext(VoteContext)

    const hasVoted = () => {
        return checkIfVoted(category);
    }

    const teams = [
        {
            name: "Adjoah Frimpong",
            slogan:"Adjoah The Leader" ,
            team:"Blue Team",
            lable:"blue",
            image: Image
        },
        {
            name:"Jason Cooks" ,
            slogan:"Jason The Warrior", 
            team:"Royal Team",
            lable:"royal",
            image: Image
        },
        {
            name:"Alexander Watnam" ,
            slogan:"Born Great" ,
            team:"Magenta Team",
            lable:"magenta" ,
            image: Image
        },
        {
            name:"Jennifer Hughes" ,
            slogan:"Jennifer The Leader" ,
            team:"Gold Team",
            lable:"gold",
            image: Image
        },
        {
            name:"Skyler Taylor" ,
            slogan:"Skyler The Leader" ,
            team:"Green Team",
            lable:"green",
            image: Image
        }
    ]

    return (
        <>
            {hasVoted() && (
                <div>
                    <h3>You have already voted for Presidential </h3>
                    <button onClick={() => clearVote(category)}>Clear Vote</button>
                </div>
            )}
            <Wrapper>
                {!hasVoted() && teams.map((team) =>
                <ImageHolder
                    image = {team.image} 
                    name={team.name} 
                    slogan={team.slogan} 
                    team={team.team}
                    lable={team.lable}
                    handleAction = {handleSelection}
                    position={position}
                    size = {size}
                    category="presidential"
                />)}
            </Wrapper>
        </>
    )
}

export default Presidential;
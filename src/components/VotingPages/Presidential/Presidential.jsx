import ImageHolder from "../../ImageHolder/ImageHolder";
import Styles from "./presidential.module.css";
import Image from "../../../images/pres_1.jpg"
import { useEffect, useContext } from "react";
import { VoteContext }  from "../../../context/VoteContext";

const Presidential = ({handleSelection, position, size}) => {
    let {data, updateVotes} = useContext(VoteContext)

    const hasVoted = () => {
        if (! data || !data["presidential"]) {
            return false;
        }

        if(data["presidential"] !== "") {
            return true;
        }

        return false;
    }
    
    const handleClearVote = () => {
        updateVotes({...data, presidential: ""})
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
                    <button onClick={() => handleClearVote("presidential")}>Clear Vote</button>
                </div>
            )}
            <div className={Styles.wrapper}>
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
                />)}
            </div>
        </>
    )
}

export default Presidential;
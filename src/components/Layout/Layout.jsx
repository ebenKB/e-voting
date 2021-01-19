import { useState, useContext } from "react";
import AuxilliaryComponent from "../AuxilliaryMembersComponent/Auxilliary";
import CoreMembers from "../CoreMembersWrapper/CoreMembers";
import Auxilliary from "../AuxilliaryMembersComponent/Auxilliary";
import Header from "../Header/Header";
import Styles from "./layout.module.css";
import { VoteContext } from "../../context/VoteContext";
import Login from "../Login/Login";

const Layout = () => {
    const [selectedOption, setSelectedOption] = useState("core");
    const { data: {auth}, updateVotes} = useContext(VoteContext)
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <>
            {auth && !auth.isLoggedIn && <Login />}
            {auth && auth.isLoggedIn && (
                <div>
                    <Header />
                    <div className={Styles.menu_options}>
                        <button onClick={() => setSelectedOption("core")} className={`${Styles.options} ${selectedOption === "core" && Styles.selected}`}>Core Members</button>
                        <button onClick={() => setSelectedOption("aux")}  className={`${Styles.options} ${selectedOption === "aux" && Styles.selected}`}>Auxilliary Members</button>
                    </div>
                    <div className={Styles.layout_wrapper}>
                        {selectedOption === "core" && <CoreMembers />}
                        {selectedOption === "aux" && <Auxilliary />}
                    </div>
                </div>
            )}
        </>
    )
}

export default Layout;

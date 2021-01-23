import React, { useState } from 'react';

let persistedData = JSON.parse(localStorage.getItem('votes'));
if (persistedData === null) {
    persistedData = {
        votes: {
            presidential: null,
            vice: null,
        },

        auth: {
            isLoggedIn: false,
        },

        candidates: {
            presidential: [],
            vice: [],
        },

        users: []
        } 
}

const initialState = {...persistedData}

export const VoteContext = React.createContext(initialState)


const VoteContextProvider = ({ children }) => {
    const [values, setValues] = useState(initialState);
    
    const handleUpdateVotes = (data) => {
        setValues(data);
        localStorage.setItem("votes", JSON.stringify(data));
    }
    
    const hasVoted = (category) => {
        console.log("This is the category", category, values["votes"][category]);
        if (!values["votes"] || !values["votes"][category]) {
            return false;
        }

        if(values["votes"][category] !== null) {
            return true;
        }

        return false;
    }

    const clearVote = (category) => {
        values["votes"][category] = "";
        setValues({...values})
        localStorage.setItem("votes", JSON.stringify(values));
    }

    return (
        <VoteContext.Provider value={
            { 
                data: values, 
                updateVotes: (data) => handleUpdateVotes(data),
                checkIfVoted: (category) => hasVoted(category),
                clearVote:(cat) => clearVote(cat)
            }}
        >
            {children} 
        </VoteContext.Provider>
    )
}
export default VoteContextProvider;      


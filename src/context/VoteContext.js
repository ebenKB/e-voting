import React, { useState } from 'react';

const initialState = {
    presidential: "",
    vice: "",
    auth: {
        isLoggedIn: false,
    }
}

export const VoteContext = React.createContext(initialState)


const VoteContextProvider = ({ children }) => {
    const [values, setValues] = useState(initialState);
    
    const handleUpdateVotes = (data) => {
        setValues(data);
    }
    
    const hasVoted = (category) => {
        console.log("This is the category", category, values);
        if (! values || !values[category]) {
            return false;
        }

        if(values[category] !== "") {
            return true;
        }

        return false;
    }

    const clearVote = (category) => {
        setValues({...values, [category]: ""})
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


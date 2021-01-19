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
    
    return (
        <VoteContext.Provider value={{ data: values, updateVotes: (data) => handleUpdateVotes(data)}}>
            {children} 
        </VoteContext.Provider>
    )
}
export default VoteContextProvider;      


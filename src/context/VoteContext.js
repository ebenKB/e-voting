import React, { useState, Component} from 'react';

const initialState = {
    presidential: "KWame Adjei",
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


// class VoteContextProvider extends Component {
//     state = {
//         presidential: "KWame Adjei",
//         vice: "",
//     }

//     setVoteState = (data) => {
//         this.setState(data);
//     }

//     render() {
//         return (
//             <VoteContext.Provider value={{ data: this.state, updateVotes: this.setVoteState}}>
//                 {this.props.children}
//             </VoteContext.Provider>
//         )
//     }
// }

// export default VoteContextProvider;
// export const ballots = JSON.parse(localStorage.getItem("votes"))

// export const handleVote = (category, val) => {
//     let votes = {}
//     votes = JSON.parse(localStorage.getItem("votes"));
//     if (votes && votes[category]) {
//         votes[category] = val;
//     } else {
//         votes = {
//             [category]:  val
//         }
//     }
   
//     localStorage.setItem("votes", JSON.stringify(votes))
// }

// export const handleClearVote = (category) => {
//     console.log(category)
//     let votes = localStorage.getItem("votes");
//     votes = JSON.parse(votes);

//     if (votes && votes[category]) {
//         votes[category] = ""
//     }

//     localStorage.setItem("votes", JSON.stringify(votes))
// }
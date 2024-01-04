import React, {useState} from 'react';

export const InDexDB = React.createContext({});

export default function GlobalIndexDB({children}){
    const [users, setUsers] = useState([]);
    const [instrus, setInstrus] = useState([]);
    return(
        <InDexDB.Provider value={{users, setUsers, instrus, setInstrus}}>
            {children}
        </InDexDB.Provider>
    )
}
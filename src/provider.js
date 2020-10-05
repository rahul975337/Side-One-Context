import React, { useState } from 'react';
import PackageContext from './context'

const provider = props => {
    const [mission, setMission] = useState({
        mname = "Go to Russia",
        agent = 007,
        accept = "Not accepted"

    })
    return (
        <PackageContext.Provider
            value={{}}
        >
            {props.children}
        </PackageContext.Provider>
    )
}
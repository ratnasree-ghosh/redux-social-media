import React from 'react';

const Header = ({children})=>{
    return(
        <>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2 style={{paddingLeft: "25px", color: "white" }}>Social Media App</h2>
            <span style={{paddingRight: "20px", fontSize: "18px"}}>{children}</span>
            
        </div>
     
        <hr/>
        </>
    )
}

export default Header;
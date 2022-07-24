import { useState, React } from "react"


export function ButtonComponent({data}){ 
    let stylebutton={
        backgroundColor:data.bg,
        color:data.color,
        fontSize:'14px',
        width:'160px',
        height:'42px',
        fontFamily:'SF Pro Display Medium',
        border:data.border ||null
    }

    return(
        <>
            <button className="btn rounded-0" style={stylebutton}>{data.text}</button>
        </>
    )
}
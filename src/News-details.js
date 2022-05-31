import React from "react"
import { useParams } from "react-router-dom"

function Newsdetails() {

    let { title } = useParams();
    let { description } = useParams();
    let { author } = useParams();
    
    return (
        <div>
            <h1>{title}</h1>
            <h4>{author}</h4>
            <p>{description}</p>
            
        </div>
    )
}

export default Newsdetails;

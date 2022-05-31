import React, { useState, useEffect, Fragment } from "react"
import { useParams, Link } from "react-router-dom"
import './News-list.css'

function Newslist() {
    const {keywords} = useParams()
    const url = `http://api.mediastack.com/v1/news?access_key=d6b4fdd53e8b822f9af14a391cccb5a4&languages=en&limit=15&keywords=${keywords}`
    const [queries, setQuery] = useState([])

    useEffect(() => {
        const fetchQuery = async () => {
            try {
                const response = await fetch(url)
                const queries = await response.json()

                setQuery(queries.data)
            } 

            catch (error) 
            {
                console.error(error)
            }
        }
        
        fetchQuery()
    
    }, [url])


    return (
        <Fragment>
            {queries.map((query) => {
                const {image, title, description, author, source, category} = query

                return (
                    <div className="news">
                        <div className="left">
                            <img src={image}></img>
                        </div>
                        <div className="right">
                            <p className="news-source"><strong>\\ {source}</strong></p>
                            <Link to={`/article/${title}/${description}/${author}`}>
                                <h1 className="news-title">{title}</h1>
                            </Link>
                            <p className="news-desc"><strong>{category}</strong> - {description}</p>
                        </div>
                        
                    </div>
                )
                })
            }
        </Fragment>
    )
}

export default Newslist;
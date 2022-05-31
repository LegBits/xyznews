import React, { useState, useEffect, } from "react"
import { useParams } from "react-router-dom"

function Pagination() {
    const {keywords} = useParams()
    const url = `http://api.mediastack.com/v1/news?access_key=d6b4fdd53e8b822f9af14a391cccb5a4&languages=en&keywords=${keywords}`
    const [pages, setPages] = useState([])

    useEffect(() => {
        const fetchPages = async () => {
            try {
                const response = await fetch(url)
                const pages = await response.json()

                setPages(pages.pagination)
            } 

            catch (error) 
            {
                console.error(error)
            }
        }
        
        fetchPages()
    
    }, [url])

    const {total} = pages
    return (
        <div className="pagination">
            <p className="total-pages">About {total} results found.</p>
        </div>
    )
}

export default Pagination;

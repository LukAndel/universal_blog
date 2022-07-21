import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import BlogContext from "./context/BlogContext"


const Gallery = () => {

    
    const params = useParams()

    const { setBlogUser } = useContext(BlogContext)

    useEffect(() => {

        if (params.name) {
            setBlogUser(params.name)
        }

    }, [params.name])

    return (
        <div>
        <h1>Your Gallery</h1>

        <p>Site under construction</p>
        </div>
    )
}

export default Gallery;
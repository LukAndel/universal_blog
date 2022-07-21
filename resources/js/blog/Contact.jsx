import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import BlogContext from "./context/BlogContext"


const Contact = () => {

    
    const params = useParams()

    const { setBlogUser } = useContext(BlogContext)

    useEffect(() => {

        if (params.name) {
            setBlogUser(params.name)
        }

    }, [params.name])



    return (
        <div>
        <h1>Your Contact</h1>

        <p>Site under construction</p>
        </div>
    )
}

export default Contact;
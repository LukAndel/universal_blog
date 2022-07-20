import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios';

const Article = () => {
    
    const params = useParams()


    const [article, setArticle] = useState("");

    const fetchArticle = async () => {
        const response = await axios.get(`api/blog/article/${params}`);
        console.log(response.data);
        setArticle(response.data);
    };

    useEffect (() => {
        fetchArticle();
    }, []);

    
    return (
        <div className="article-view">
            <h1>title</h1>
            <p>date / categories</p>
            <p>text</p>
        </div>

    );
}
export default Article;
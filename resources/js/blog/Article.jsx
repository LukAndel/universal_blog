import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios';

const Article = () => {
    
    const params = useParams()

    const [article, setArticle] = useState([]);

    const fetchArticle = async () => {
        const response = await axios.get(`/api/blog/article/${params.article_id}`);
        setArticle(response.data);
    };

    useEffect (() => {
        fetchArticle();
    }, []);

    const text = article.text;

    return (article == [] ?
        <h1>loading</h1>
        :
        <div className="article-view">
            <h1>{article.title}</h1>
            <p>{article.date} / {article.categories?.map((article) => article.name + ' || ')}</p>
            <div dangerouslySetInnerHTML={{__html: text }}></div>
        </div>

    );
}
export default Article;
import {useEffect, useState} from 'react';
import axios from 'axios';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
        const response = await axios.get("api/blog/articles");
        console.log(response.data);
        setArticles(response.data);
    };

    useEffect (() => {
        fetchArticles();
    }, []);




    return (
<>
            {articles.map((article) => (
                <div className="article" key={article.id}>
                    <h2 className="article__title">{article.title}</h2>
                    <p className="article__text">{article.text}</p>
                </div>
            ))}
</>
    );
}

export default Articles;
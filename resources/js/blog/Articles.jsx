import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Articles = ({ user }) => {
    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
        const response = await axios.get("/api/blog/articles");
        setArticles(response.data);
    };

    useEffect (() => {
        fetchArticles();
    }, []);




    return (
<>
            {articles.map((article) => (
                <Link to={"/" + user.name + '/' + article.id } ><div className="article" key={article.id}>
                    <h2 className="article__title">{article.title}</h2>
                    <p className="article__text">{article.text}</p>
                </div></Link>
            ))}
</>
    );
}

export default Articles;
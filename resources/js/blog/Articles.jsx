import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import BlogContext from './context/BlogContext';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    const params = useParams()

    const { blogUser, setBlogUser } = useContext(BlogContext)

    const fetchArticles = async () => {
        const response = await axios.get("/api/"+ params.name +"/articles");
        setArticles(response.data);
    };

    useEffect (() => {
        if (params.name) {
            fetchArticles();
            setBlogUser(params.name)
        }
    }, [params.name]);


    return (
        <div className='articles'>
            {articles.map((article) => (
                <Link to={"/" + params.name + '/' + article.id } key={article.id} ><div className="article" >
                    <h2 className="article__title">{article.title}</h2>
                    <p className="article__text">{article.text}</p>
                </div></Link>
            ))}
        </div>
    );
}

export default Articles;
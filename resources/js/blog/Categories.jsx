import {useEffect, useState} from 'react';
import axios from 'axios';

const Categories = () => {

    const [categoriesData, setCategoriesData] = useState(null);

    const fetchCategories = async () => {
        const response = await axios.get("/api/blog/categories");
        setCategoriesData(response.data);
    };

    useEffect (() => {
        fetchCategories();
    }, []);

    const action = (() => {
        if (categoriesData !== null) {
        const categories = categoriesData?.map((article) => article.categories?.map((category) => category.name));

    const categoryMap = Object.values(categories)
    .reduce((concatedArr, item) => concatedArr.concat(Object.entries(item)), [])
    .reduce((result, [category, values]) => {
        result[category] = result[category] || [];
        result[category] = result[category].concat(values);
        return result;
    }, {});



    let uniqueArray = [];

    for (let i = 0; i < categoryMap[0].length; i++) {
        if (!uniqueArray.includes(categoryMap[0][i])) {
            uniqueArray.push(categoryMap[0][i]);
        }
    };

    console.log(uniqueArray);
    }})

    useEffect (() => {
        action();
    }, [categoriesData]);
    

    return (
        <p></p>
    )
}

export default Categories;
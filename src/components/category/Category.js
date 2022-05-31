import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./category.css";

function Category() {
    const [categories, setCategories] = useState(null);
    const [filter, setFilter] = useState();

    const fetchData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const result = await data.json();
        setCategories(result.categories);
    }

    const handleFilterAreaClick = e => {
        setFilter(e.target.value);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div className='category'>
            <div className='category__header'>
                <h1 className='header__title'>Category</h1>
                <h2 className='header__cta'>Browse our curated menu made for you</h2>
            </div>
            <div className='category__filter'>
                <button className='filter__button__area' value='british' onClick={(e) => handleFilterAreaClick(e)}>British</button>
                <button className='filter__button__area' value='canadian' onClick={(e) => handleFilterAreaClick(e)}>Canadian</button>
                <button className='filter__button__area' value='chicken_breast' onClick={(e) => handleFilterAreaClick(e)}>Chicken Breast</button>
                <button className='filter__button__area' value='garlic' onClick={(e) => handleFilterAreaClick(e)}>Garlic</button>
            </div>
            <div className='category__list'>
                {
                    categories && categories.length > 0 ? (
                        categories.map(category => (
                            <div className='category__item' key={category.idCategory}>
                                <Link to={`/meals/${category.strCategory}`}>
                                    <img src={category.strCategoryThumb} alt={category.strCategory} />
                                    <div className='item__header'>
                                        <span className='item__title'>{category.strCategory}</span>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>Loading ...</p>
                    )
                }
            </div>
        </div>
    )
}

export default Category;
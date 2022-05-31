import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./meals.css";


function Meals() {
  const { strCategory: category } = useParams();

  const [meals, setMeals] = useState();

  const fetchData = async meals => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meals}`);
    const result = await data.json();
    setMeals(result.meals);
  }

  useEffect(() => {
    fetchData(category);
  }, [category]);

  return (
    <div className='meals'>
      <div className='meals__header'>
        <h1 className="header__title">{category}</h1>
        <h2 className='header__cta'>{`${category}? That's a good choice. Let's pick the meal!`}</h2>
      </div>
      <div className='meals__list'>
        {
          meals && meals.length > 0 ? (
            meals.map(meal => (
              <div className='meals__item' key={meal.idMeal}>
                <Link to={`/meal/${meal.idMeal}`}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <div className='item__header'>
                    <span className='item__title'>{meal.strMeal}</span>
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

export default Meals;
import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import './meal.css';

function Meal() {
    let {strMeal: selectedMeal} = useParams();

    const [meal, setMeal] = useState('');

    const fetchData = async meal => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);
        const result = await data.json();
        setMeal(result.meals[0]);
    }
    
    useEffect(() => {
        fetchData(selectedMeal);
    }, [selectedMeal]);

    console.log(meal)

    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
        ingredients.push(meal[`strIngredient${i}`]);
    }
    let measures = [];
    for (let i = 1; i <=20; i++) {
        measures.push(meal[`strMeasure${i}`]);
    }
    
    return (
        <div className='meal'>
            <div className='meal__header'>
                <img src={meal.strMealThumb} />
                <h1 className='header__title'>{meal.strMeal}</h1>
                <h2 className='header__subtitle'>
                    <span>{meal.strArea} <Link to={`/meals/${meal.strCategory}`}>{meal.strCategory}</Link></span>
                </h2>
            </div>
            <div className='meal__informations'>
                <div className='meal__ingredients'>
                    <h6>Ingredients</h6>
                    <hr/>
                    {
                        ingredients? (
                            <ul>
                                {
                                    ingredients.map((ingredient, index) => (
                                        <li key={index}>{`${measures[index]} ${ingredient}`}</li>
                                    ))
                                }
                            </ul>
                        ) : (<p>Loading ...</p>)
                    }
                </div>
                <div className='meal__instructions'>
                    <h6>Instructions</h6>
                    <hr/>
                    <p>{meal.strInstructions}</p>
                </div>
            </div>
        </div>
    )
}

export default Meal;
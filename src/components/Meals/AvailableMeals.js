import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';
import Loading from '../UI/Loading';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsloading(true);
    fetch('https://food-order-app-d9426-default-rtdb.firebaseio.com/meals.json')
    .then((response) => response.json())
    .then(meals => {
      const loadedMeals = [];

      for(let key in meals) {
        loadedMeals.push({
          id: key,
          name: meals[key].name,
          description: meals[key].description,
          price: meals[key].price
        })
      };
      setMeals(loadedMeals);
      setIsloading(false);
      setIsError(false);
    }).catch(err => {
      setIsError(true);
      setIsloading(false);
    })
  }, [])

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if(isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <Loading/>
      </section>
    )
  }

  if(isError) {
    return (
      <section className={classes.MealsLoading}>
        <h2>Something went wrong!!</h2>
      </section>
    )
  }

  return (
    <section className={classes.meals}>
      <Card>
        { !isLoading && <ul>{mealsList}</ul> }
      </Card>
    </section>
  );
};

export default AvailableMeals;

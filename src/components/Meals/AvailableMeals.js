import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Dosa',
    description: 'Thin crisp rice and lentil pancake served with sambhar and coconut chutney.',
    price: 50,
  },
  {
    id: 'm2',
    name: 'Masala Omlette',
    description: 'beaten eggs, fried with oil in a frying pan and topped with onions and chillies',
    price: 50,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 250,
  },
  {
    id: 'm4',
    name: 'Buffalo Chicken wings',
    description: 'Deeply fried chicken wings served in a plate',
    price: 500,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

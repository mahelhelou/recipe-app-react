# READ ME

- We can destructure `props` object, and use the name of values we'll use directly.

```js
// function Ingredient({ amount, measurement, name })
function Ingredient(props) {
	return (
		<li>
			{/* {amount} {measurement} {name} */}
			{props.amount} {props.measurement} {props.name}
		</li>
	)
}

export default Ingredient
```

- We can destructure single object props using the `rest operator`.

```js
function IngredientsList(props) {
	return (
		<div className='ingredients'>
			{props.list.map((ingredient, index) => (
				// <Ingredient key={index} {...ingredient} />
				<Ingredient key={index} amount={ingredient.amount} measurement={ingredient.measurement} name={ingredient.name} />
			))}
		</div>
	)
}

export default IngredientsList
```

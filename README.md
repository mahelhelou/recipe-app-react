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

## Steps to Create App Like This

### 1. Create `Ingredient` component

```js
import React from 'react'

/**
 * A component to render every ingredient
 * We'll render dynamic values for each ingredient
 */
function Ingredient(props) {
	return (
		<li>
			{props.amount} {props.measurement} {props.name}
		</li>
	)
}

export default Ingredient
```

### 2. Create `IngredientsList` component

```js
import React from 'react'
import Ingredient from './Ingredient'

/**
 * A component to render all ingredients for each recipe
 * We'll create a dynamic title for the instructions
 */
function IngredientsList(props) {
	return (
		<ul className='ingredients'>
			<h3>{props.title}</h3>
			{props.list.map((ingredient, index) => (
				<Ingredient key={index} amount={ingredient.amount} measurement={ingredient.measurement} name={ingredient.name} />
			))}
		</ul>
	)
}

export default IngredientsList
```

### 3. Create `Instructions` component

```js
import React from 'react'

/**
 * A component to render the cooking instructions for each recipe
 * We'll create a dynamic title for the cooking instructions
 */
function Instructions(props) {
	return (
		<div className='instructions'>
			<h3>{props.title}</h3>
			{props.steps.map((step, index) => (
				<p key={index}>{step}</p>
			))}
		</div>
	)
}

export default Instructions
```

### 4. Create `Recipe` component:

```js
import React from 'react'
import IngredientsList from './IngredientList'
import Instructions from './Instructions'

/**
 * A component to render a single recipe in our app
 * Every recipe has ingredients & cooking instructions
 */
function Recipe(props) {
	return (
		<section id={props.name.toLowerCase().replace(/ /g, '-')}>
			<h2>{props.name}</h2>
			<IngredientsList title='Cooking Ingredients' list={props.ingredients} />
			<Instructions title='Recipe Instructions' steps={props.steps} />
		</section>
	)
}

export default Recipe
```

### 5. Create `Menu` component

```js
import React from 'react'
import Recipe from './Recipe'

// A component to render all recipes in our app
function Menu(props) {
	return (
		<article>
			<header>
				<h1>Delicious Recipes</h1>
			</header>
			<div className='recipes'>
				{/* {props.recipes.map((recipe, index) => (
					<Recipe key={index} {...recipe} />
				))} */}
				{props.recipes.map((recipe, index) => (
					<Recipe key={index} name={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} />
				))}
			</div>
		</article>
	)
}

export default Menu
```

### 6. Render the app in `index.js` file

```js
import React from 'react'
import ReactDOM from 'react-dom'
import './Index.css'

// Components
import Menu from './components/Menu'
import data from './data/recipes.json'

ReactDOM.render(
	<React.StrictMode>
		<Menu recipes={data} />
	</React.StrictMode>,
	document.getElementById('root')
)
```

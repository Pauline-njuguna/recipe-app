const url = "https://www.themealdb.com/api/json/v1/1/search.php?s";
const results = document.getElementById("results");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  let userInp = document.getElementById("user-input").value;
  if (userInp.length == 0) {
    results.innerHTML`<h3>Input field cannot be empty</h3>`;
  } else {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const myMeal = data.meals[0];
        console.log(myMeal);
        console.log(myMeal.strMealThumb);
        console.log(myMeal.strMeal);
        console.log(myMeal.strArea);
        console.log(myMeal.strInstructions);

        let count = 1;
        let ingredients = [];
        for (let i in myMeal) {
          let ingredient = "";
          let measure = "";
          if (i.startsWith("stringIngredients") && myMeal[i]) {
            ingredient = myMeal[i];
            measure = myMeal[`strMeasure` + count];
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
          }
        }

        console.log(ingredients);
        results.innerHTML = `
        <div class="image">
        <img src=${myMeal.strMealThumb}>
        </div>
        <div class="details">
            <h2>${myMeal.strMeal}</h2>
            <h4>${myMeal.strArea}</h4>
            <h4>${myMeal.strInstructions}</h4>
            
        </div>
         <div id="ingredient"></div>
         <div id="recipe"></div>`;
        let ingredient = document.getElementById("ingredient");

        let lowerDiv = document.createElement("ul");
        let recipe = document.getElementById("recipe");

        ingredients.forEach((i) =>{
            let child  = document.createElement("li");
            child.innerText = i;
            parent.appendChild(child)
            ingredients.appendChild(parent)
            // console.log(i)
        })

      });
  }
});

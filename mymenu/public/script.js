// Пример данных (в реальном проекте данные будут загружаться из базы данных)
const recipes = {
    breakfast: [
      { name: "Омлет", link: "https://example.com/omelet" },
      { name: "Блины", link: "https://example.com/pancakes" }
    ],
    lunch: [
      { name: "Суп", link: "https://example.com/soup" },
      { name: "Паста", link: "https://example.com/pasta" }
    ],
    dinner: [
      { name: "Гречка с курицей", link: "https://example.com/buckwheat" },
      { name: "Салат", link: "https://example.com/salad" }
    ],
    snack: [
      { name: "Фруктовый салат", link: "https://example.com/fruit-salad" },
      { name: "Орехи", link: "https://example.com/nuts" }
    ]
  };
  
  // Получаем текущую страницу
  const path = window.location.pathname.split('/').pop().replace('.html', '');
  
  // Загружаем рецепты на страницу
  const recipeList = document.getElementById('recipe-list');
  if (recipeList) {
    recipes[path].forEach(recipe => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = recipe.link;
      a.textContent = recipe.name;
      li.appendChild(a);
      recipeList.appendChild(li);
    });
  }
  
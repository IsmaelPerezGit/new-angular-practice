import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test',
      'Test description',
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        new Ingredient('Tortilla', 1),
        new Ingredient('Chicken', 2)
      ]
    ),
    new Recipe(
      'A different recipe',
      'different description',
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Beef', 1),
        new Ingredient('Cheese', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

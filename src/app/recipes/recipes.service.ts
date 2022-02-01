import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'hotdog',
      imageUrl:
        'https://live.staticflickr.com/4030/5076897106_fcb65a13d1_b.jpg',
      ingredients: [
        'hotdogs',
        'buns',
        'mustard',
        'relish',
        'onions',
        'peppers',
      ],
    },
    {
      id: '2',
      title: 'hamburger',
      imageUrl:
        'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
      ingredients: [
        'beef',
        'buns',
        'lettuce',
        'tomatoes',
        'onions',
        'pickels',
        'mayo',
        'cheese',
      ],
    },
  ];

  constructor() {}

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(id: string): Recipe {
    return { ...this.recipes.find((r: Recipe) => r.id === id) };
  }

  deleteRecipe(id: string): void {
    this.recipes = this.recipes.filter((r: Recipe) => r.id !== id);
  }
}

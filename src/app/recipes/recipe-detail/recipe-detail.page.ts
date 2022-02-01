import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe;
  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (!params.has('id')) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }
      const id = params.get('id');
      this.recipe = this.recipeService.getRecipe(id);
      console.log(this.recipe);
    });
  }

  async onDeleteRecipe(): Promise<void> {
    const alertAsync = await this.alertController.create({
      header: 'Delete Recipe',
      message: `Do you want to delete the ${this.recipe.title} recipe?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.deleteRecipe(this.recipe.id);
            this.router.navigate(['/recipes']);
          },
        },
      ],
    });

    alertAsync.present();
  }
}

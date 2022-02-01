import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipesPage } from './recipes.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecipesPageRoutingModule],
  declarations: [RecipesPage, RecipeItemComponent],
})
export class RecipesPageModule {}

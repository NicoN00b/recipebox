import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>World Famous Secret Recipes</h1>
      <ul>
        <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}<br>Ingredients: {{currentRecipe.ingredients}}<br>Directions: {{currentRecipe.directions}}</li>
      </ul>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe("Fish Sticks", "fish sticks, tartar sauce", "Pull Fish Sticks out of Freezer, defrost in Microwave, and place in oven preheated to 375 for 20 minutes, let cool, and enjoy while watching Monday Night Raw."),
    new Recipe('Sghetti and Butter', "Sghetti, Butter, Ketchup", "Boil the sghetti until it sticks to the wall, top with gobs of butter and ketchup, serve well and enjoy Nascar"),
    new Recipe("Slim Jims", "Randy Savage, Probably intestines, definitely salt, sulfites, pepper, other assorted animals and parts", "go to 7-Eleven, to the counter, it's probably right there, watch out for Randy Savage.")
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) {}
}

import {Component, inject, OnInit} from '@angular/core';
import {RecipeService} from '../recipe/recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-description-layout',
  imports: [],
  templateUrl: './description-layout.component.html',
  styleUrl: './description-layout.component.scss'
})
export class DescriptionLayoutComponent implements OnInit {
  data!: { key: string; value: any }[];
  mealId!: string;

  constructor(private _recipeService: RecipeService, private _activatedRoute: ActivatedRoute = inject(ActivatedRoute)) {

  }

  ngOnInit(): void {
    this.mealId = this._activatedRoute.snapshot.paramMap.get('id')!;
    this.mealRecipe();
  }

  mealRecipe() {
    this._recipeService.getMeal(this.mealId).subscribe(data => {
      this.data = Object.entries(data.meals[0]).map(([key, value]) => ({key, value}));
    });
  }
}

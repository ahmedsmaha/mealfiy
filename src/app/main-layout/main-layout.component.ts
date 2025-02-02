import {Component, inject, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {MealComponent} from '../meal/meal.component';
import {RecipeService} from '../recipe/recipe.service';
import {Category} from '../interfaces/meal';
import {ActivatedRoute, Params} from '@angular/router';
import {TrimWordsPipe} from '../trim-words/trim-words.pipe';

@Component({
  selector: 'app-main-layout',
  imports: [
    NavbarComponent,
    MealComponent,
    TrimWordsPipe
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  data?: Category;
  categoryId!: string;

  constructor(private _activatedRoute: ActivatedRoute = inject(ActivatedRoute), private _recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params): void => {
      this.categoryId = params['name'];
      this.getCategory();
    });
  }

  getCategory(): void {
    if (this.categoryId == "all") {
      this._recipeService.getAll().subscribe(data => {
        this.data = data;
      });
    } else {
      this._recipeService.getCategory(this.categoryId).subscribe(data => {
        this.data = data;
      });
    }
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Category} from '../interfaces/meal';
import {Recipe} from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _http: HttpClient) {
  }

  getCategory(categoryId: string): Observable<Category> {
    return this._http.get<Category>(`${environment.apiUrl}/filter.php?c=${categoryId}`).pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        throw error;
      })
    );
  }

  getAll(): Observable<Category> {
    return this._http.get<Category>(`${environment.apiUrl}/search.php?s`).pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        throw error;
      })
    );
  }

  getMeal(mealId: string): Observable<Recipe> {
    return this._http.get<Recipe>(`${environment.apiUrl}/lookup.php?i=${mealId}`).pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        throw error;
      })
    );
  }
}

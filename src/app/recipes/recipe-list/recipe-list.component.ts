import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[]  =  [
  new Recipe('A test recipe','This is simpaly a test','https://img.taste.com.au/GR-XKpyy/taste/2014/10/australias-most-cooked-pancake-recipe-118377-2.jpg'),
  new Recipe('A test recipe','This is simpaly a test','https://img.taste.com.au/GR-XKpyy/taste/2014/10/australias-most-cooked-pancake-recipe-118377-2.jpg')

];
  constructor() { }
 
  ngOnInit() {
  }

}

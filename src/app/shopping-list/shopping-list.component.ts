import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:  Ingredient[] = [
    new Ingredient('A test recipe',5),
    new Ingredient('A test recipe',10),
  ]; 
  constructor() { }

  ngOnInit() {
  }

}

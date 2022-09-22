import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.page.html',
  styleUrls: ['./my-menu.page.scss'],
})
export class MyMenuPage implements OnInit {

  items: any = [];

  constructor( private itemService: ItemService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.itemService.getItems().subscribe(response => {
      this.items = response;
    });
  }
}
